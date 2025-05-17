import fetch from 'node-fetch';
import QRCode from 'qrcode';
import fs from 'fs';

// Step 1: Fetch UUID from an API
async function getUUID() {
  const response = await fetch('https://httpbin.org/uuid');
  const data = await response.json();
  return data.uuid;
}

// Step 2: Generate QR code and save to file
async function generateAndSaveQR(uuid) {
  try {
    console.log('Fetched UUID:', uuid);

    const qrFilePath = 'uuid_qr.png';
    await QRCode.toFile(qrFilePath, uuid);

    console.log(`QR Code saved as ${qrFilePath}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

export default generateAndSaveQR;