export default function caraPembayaran(input: number) {
  switch (input) {
    case 1:
      return 'BIASA/TUNAI';
    case 2:
      return 'KARTU KREDIT';

    default:
      return '';
  }
}
