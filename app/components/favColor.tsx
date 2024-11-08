import { useState } from "react";

type FavColorProps = {
  onColorChange: (color: string) => void;  // Fungsi untuk mengubah warna latar belakang
};

export default function FavColor({ onColorChange }: FavColorProps) {
  const [warna, setWarna] = useState("-");

  // Fungsi untuk menangani klik tombol warna
  const handleClick = (newColor: string, bgColor: string) => {
    setWarna(newColor);  // Mengubah teks warna yang ditampilkan
    onColorChange(bgColor);  // Mengubah warna latar belakang di komponen induk
  };

  return (
    <div className="container mx-auto p-4 text-center text-grey">
      <h1>Warna Favorit Saya adalah {warna}</h1>
      <hr className="m-10" />
      <p>Ubah tema ke warna:</p>

      {/* Tombol untuk mengubah latar belakang menjadi pink */}
      <button
        className="bg-pink-300 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded m-2"
        onClick={() => handleClick("Pink", "bg-pink-500")}
      >
        Pink
      </button>

      {/* Tombol untuk mengubah latar belakang menjadi gelap */}
      <button
        className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded m-2"
        onClick={() => handleClick("Gelap", "bg-gray-900")}
      >
        Gelap
      </button>

      {/* Tombol untuk mengubah latar belakang menjadi terang */}
      <button
        className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded m-2 border border-gray-300"
        onClick={() => handleClick("Terang", "bg-white")}
      >
        Terang
      </button>
    </div>
  );
}
