// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Ticketing {
    struct Ticket {
        string ticketId;
        address owner;
        uint timestamp;
        bool used;
    }

    mapping(string => Ticket) public tickets;

    event TicketIssued(string ticketId, address owner);
    event TicketUsed(string ticketId);

    function issueTicket(string memory _ticketId) public {
        require(tickets[_ticketId].timestamp == 0, "Ticket already issued");
        tickets[_ticketId] = Ticket(_ticketId, msg.sender, block.timestamp, false);
        emit TicketIssued(_ticketId, msg.sender);
    }

    function validateTicket(string memory _ticketId) public view returns (bool) {
        return tickets[_ticketId].owner == msg.sender && !tickets[_ticketId].used;
    }

    function markTicketUsed(string memory _ticketId) public {
        require(tickets[_ticketId].owner == msg.sender, "Not the ticket owner");
        require(!tickets[_ticketId].used, "Ticket already used");
        tickets[_ticketId].used = true;
        emit TicketUsed(_ticketId);
    }
}