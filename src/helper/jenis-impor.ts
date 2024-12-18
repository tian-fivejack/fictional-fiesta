export default function jenisImpor(jenis: string) {
  switch (jenis) {
    case '1':
      return 'UNTUK DIPAKAI';
    case '2':
      return 'TIDAK UNTUK DIPAKAI';

    default:
      return '';
  }
}
