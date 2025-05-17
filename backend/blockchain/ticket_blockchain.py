"""
Blockchain implementation for ticket management
"""

import hashlib
import json
from datetime import datetime
from .block import Block
from .transaction import TicketTransaction

class TicketBlockchain:
    def __init__(self):
        self.chain = []
        self.pending_transactions = []
        self.difficulty = 4
        self.create_genesis_block()
        
    def create_genesis_block(self):
        genesis = Block(0, [], str(datetime.now()), "0")
        genesis.hash = genesis.calculate_hash()
        self.chain.append(genesis)
    
    def add_block(self, transactions):
        previous_hash = self.chain[-1].hash
        new_block = Block(len(self.chain), transactions, str(datetime.now()), previous_hash)
        new_block.mine_block(self.difficulty)
        self.chain.append(new_block)
        return new_block
    
    def create_ticket_transaction(self, buyer_id, event_id, ticket_data):
        transaction = TicketTransaction(buyer_id, event_id, ticket_data)
        self.pending_transactions.append(transaction)
        return transaction
    
    def is_chain_valid(self):
        for i in range(1, len(self.chain)):
            current = self.chain[i]
            previous = self.chain[i-1]
            
            if current.hash != current.calculate_hash():
                return False
            if current.previous_hash != previous.hash:
                return False
        return True
    
    def verify_ticket(self, ticket_hash):
        for block in self.chain:
            for tx in block.transactions:
                if tx.ticket_hash == ticket_hash:
                    return tx
        return None