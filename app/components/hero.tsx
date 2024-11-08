import foto from "../puteri.jpeg";

export default function Hero(){
return(
    <div className="container mx-auto p-4 text-center">
    <h1 className="text-grey-400 font-bold">CV Online</h1>
    <h1 className="text-Grey mb-4">Sekar Indryani Puteri</h1>
    <Profile />
    <p className="mt-4 mb-8 text-Grey">
    Saya adalah seorang mahasiswi Program Studi Sistem Informasi di Ma'soem University. Saya memiliki minat yang mendalam dalam bidang teknologi informasi dan pemrograman, serta bersemangat untuk mengembangkan keterampilan teknis dan analitis di dunia digital.
    </p>
</div>
);

}
function Profile() {
    return <img src={foto.src} alt="CV Andin" className="fotoku w-32 h-32 mx-auto rounded-full"/>;
  }