export default function MyApp() {
  return (
        <div className="container mx-auto p-2 text-center pt-10">
          <h2 className="text-grey font-bold">RIWAYAT PEKERJAAN</h2>
         <RowRiwayatKerja tahun="2019" instansi="Cafe Kopi Kita" bekerja="Marketing" />
         <RowRiwayatKerja tahun="2021" instansi="PT Herba Salam" bekerja="Public Relations" />
         <RowRiwayatKerja tahun="2022" instansi="Hania HNI Cafe" bekerja="Barista" />
         <RowRiwayatKerja tahun="2024" instansi="PT HNI-Halal Network Internasional" bekerja="Marketing" />
        </div>
  );
}
interface RowRiwayatKerjaProps {
  tahun: string;
  instansi: string;
  bekerja: string;
}

function RowRiwayatKerja(props: RowRiwayatKerjaProps) {
  return (
    <div className="border-2 border-pink-300/75 rounded-lg bg-pink-300 text-black p-2 my-5">
      <div className="container mx-auto ">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4 ">{props.tahun}</div>
          <div className="col-span-12 md:col-span-4">{props.instansi}</div>
          <div className="col-span-12 md:col-span-4">{props.bekerja}</div>
        </div>
      </div>
    </div>
  )
}