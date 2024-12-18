export default function transaksi(input: string) {
  switch (input) {
    case 'IMB':
      return 'Transaksi Perdagangan Dengan Imbal Dagang';
    default:
      return '';
  }
}
