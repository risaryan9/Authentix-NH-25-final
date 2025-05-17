"""
Identity verification for ticket purchases
"""

class IdentityVerifier:
    def __init__(self):
        self.verified_ids = set()
    
    def verify_identity(self, user_id, biometric_data=None):
        # In real implementation, this would connect to KYC service
        # For demo, we'll just track verified IDs
        if user_id in self.verified_ids:
            return True
        
        # Simulate verification process
        is_verified = len(user_id) >= 8  # Simple demo check
        
        if is_verified:
            self.verified_ids.add(user_id)
        
        return is_verified

# Global verifier instance
verifier = IdentityVerifier()

def verify_identity(user_id, biometric_data=None):
    return verifier.verify_identity(user_id, biometric_data)