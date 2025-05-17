"""
Entry scanner implementation
"""

from tickets.qr_service import read_qr_code
from tickets.ticket import Ticket
from blockchain.ticket_blockchain import TicketBlockchain

class EntryScanner:
    def __init__(self, blockchain):
        self.blockchain = blockchain
        self.scanner_id = "scanner_" + str(id(self))
    
    def scan_ticket(self, qr_image_path):
        ticket_hash = read_qr_code(qr_image_path)
        if not ticket_hash:
            return False, "Invalid QR code"
        
        # Verify against blockchain
        tx = self.blockchain.verify_ticket(ticket_hash)
        if not tx:
            return False, "Ticket not found in blockchain"
        
        # Check if already used
        if tx.ticket_data.get('used', False):
            return False, "Ticket already used"
        
        # Mark as used
        tx.ticket_data['used'] = True
        tx.ticket_data['scanned_by'] = self.scanner_id
        
        return True, "Entry granted"