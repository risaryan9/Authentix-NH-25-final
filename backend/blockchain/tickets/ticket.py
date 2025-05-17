"""
Ticket generation and management
"""

from .qr_service import generate_ticket_qr
from identity.verification import verify_identity
import json

class Ticket:
    def __init__(self, blockchain, buyer_id, event_id, seat_info):
        self.blockchain = blockchain
        self.buyer_id = buyer_id
        self.event_id = event_id
        self.seat_info = seat_info
        self.verified = False
        self.qr_code = None
    
    def generate(self):
        # Verify buyer identity first
        if not verify_identity(self.buyer_id):
            raise ValueError("Buyer identity verification failed")
        
        ticket_data = {
            "buyer_id": self.buyer_id,
            "event_id": self.event_id,
            "seat_info": self.seat_info,
        }
        
        # Create blockchain transaction
        tx = self.blockchain.create_ticket_transaction(
            self.buyer_id, 
            self.event_id, 
            ticket_data
        )
        
        # Generate QR code with ticket hash
        self.qr_code = generate_ticket_qr(tx.ticket_hash)
        return tx.ticket_hash
    
    def verify(self, scanner_id):
        if not self.qr_code:
            return False
        
        # Verify against blockchain
        tx = self.blockchain.verify_ticket(self.qr_code.ticket_hash)
        if not tx:
            return False
        
        # Check if already used
        if tx.ticket_data.get('used', False):
            return False
        
        # Mark as used in blockchain
        tx.ticket_data['used'] = True
        tx.ticket_data['scanned_by'] = scanner_id
        
        return True