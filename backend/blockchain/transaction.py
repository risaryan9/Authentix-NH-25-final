"""
Ticket transaction implementation
"""

import hashlib
import json
from datetime import datetime

class TicketTransaction:
    def __init__(self, buyer_id, event_id, ticket_data):
        self.buyer_id = buyer_id
        self.event_id = event_id
        self.ticket_data = ticket_data
        self.timestamp = str(datetime.now())
        self.ticket_hash = self.calculate_hash()
    
    def calculate_hash(self):
        tx_string = json.dumps({
            "buyer_id": self.buyer_id,
            "event_id": self.event_id,
            "ticket_data": self.ticket_data,
            "timestamp": self.timestamp
        }, sort_keys=True).encode()
        return hashlib.sha256(tx_string).hexdigest()
    
    def to_dict(self):
        return {
            "buyer_id": self.buyer_id,
            "event_id": self.event_id,
            "ticket_data": self.ticket_data,
            "timestamp": self.timestamp,
            "ticket_hash": self.ticket_hash
        }