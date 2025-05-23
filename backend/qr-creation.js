import QRCode from 'qrcode';


//Generate the user QR from the given DigiLocker Details
export async function generateUserQr(uuid) {
  try {
    const qrFilePath = 'user_qr.png'; // or use dynamic file naming
    await QRCode.toFile(qrFilePath, uuid);
    console.log(`User QR Code saved as ${qrFilePath}`);
  } catch (error) {
    console.error('Error generating user QR code:', error);
  }
}


//Generates Ticket QR from given JSON file
export async function generateTicketQr(data) {
  try {
    const qrDataUrl = await QRCode.toDataURL(data);
    return qrDataUrl;
  } catch (error) {
    console.error('Error generating ticket QR code:', error);
    throw error;
  }
}