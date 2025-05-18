import QRCode from 'qrcode';

export async function generateUserQr(uuid) {
  try {
    const qrFilePath = 'user_qr.png'; // or use dynamic file naming
    await QRCode.toFile(qrFilePath, uuid);
    console.log(`User QR Code saved as ${qrFilePath}`);
  } catch (error) {
    console.error('Error generating user QR code:', error);
  }
}

export async function generateTicketQr(data) {
  try {
    const qrDataUrl = await QRCode.toDataURL(data);
    return qrDataUrl;
  } catch (error) {
    console.error('Error generating ticket QR code:', error);
    throw error;
  }
}