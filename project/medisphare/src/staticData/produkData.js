// Import semua gambar produk
import img1 from "../assets/products/1.png";
import img2 from "../assets/products/2.png";
import img3 from "../assets/products/3.png";
import img4 from "../assets/products/4.png";
import img5 from "../assets/products/5.png";
import img6 from "../assets/products/6.png";
import img7 from "../assets/products/7.png";
import img8 from "../assets/products/8.png";
import img9 from "../assets/products/9.png";
import img10 from "../assets/products/10.png";
import img11 from "../assets/products/11.png";
import img12 from "../assets/products/12.png";
import img13 from "../assets/products/13.png";
import img14 from "../assets/products/14.png";
import img15 from "../assets/products/15.png";
import img16 from "../assets/products/16.png";
import img17 from "../assets/products/17.png";
import img18 from "../assets/products/18.png";
import img19 from "../assets/products/19.png";
import img20 from "../assets/products/20.png";
import img21 from "../assets/products/21.png";
import img22 from "../assets/products/22.png";
import img23 from "../assets/products/23.png";
import img24 from "../assets/products/24.png";
import img25 from "../assets/products/25.png";
import img26 from "../assets/products/26.png";
import img27 from "../assets/products/27.png";
import img28 from "../assets/products/28.png";
import img29 from "../assets/products/29.png";
import img30 from "../assets/products/30.png";
import img31 from "../assets/products/31.png";
import img32 from "../assets/products/32.png";
import img33 from "../assets/products/33.png";
import img34 from "../assets/products/34.png";
import img35 from "../assets/products/35.png";
import img36 from "../assets/products/36.png";
import img37 from "../assets/products/37.png";
import img38 from "../assets/products/38.png";
import img39 from "../assets/products/39.png";
import img40 from "../assets/products/40.png";
import img41 from "../assets/products/41.png";
import img42 from "../assets/products/42.png";
import img43 from "../assets/products/43.png";
import img44 from "../assets/products/44.png";
import img45 from "../assets/products/45.png";
import img46 from "../assets/products/46.png";
import img47 from "../assets/products/47.png";
import img48 from "../assets/products/48.png";
import img49 from "../assets/products/49.png";
import img50 from "../assets/products/50.png";
import img51 from "../assets/products/51.png";
import img52 from "../assets/products/52.png";
import img53 from "../assets/products/53.png";
import img54 from "../assets/products/54.png";
import img55 from "../assets/products/55.png";
import img56 from "../assets/products/56.png";
import img57 from "../assets/products/57.png";
import img58 from "../assets/products/58.png";
import img59 from "../assets/products/59.png";
import img60 from "../assets/products/60.png";

// Data produk
const products = [
  { id: 1, name: "Amoxicillin", category: "Tablet", image: img1 },
  { id: 2, name: "Azithromycin", category: "Tablet", image: img2 },
  { id: 3, name: "Cefuroxime Axetil", category: "Tablet", image: img3 },
  { id: 4, name: "Cetrizen Hydrochloride", category: "Tablet", image: img4 },
  { id: 5, name: "Clavamox", category: "Tablet", image: img5 },
  { id: 6, name: "Phenylephrine Hydrochloride", category: "Tablet", image: img6 },
  { id: 7, name: "Dextromethorpan", category: "Tablet", image: img7 },
  { id: 8, name: "Erythromycin", category: "Tablet", image: img8 },
  { id: 9, name: "Ethambutol", category: "Tablet", image: img9 },
  { id: 10, name: "Pseudoephedrine Hydrochloride", category: "Tablet", image: img10 },
  { id: 11, name: "Guaifenesin", category: "Tablet", image: img11 },
  { id: 12, name: "Ibuprofen", category: "Tablet", image: img12 },
  { id: 13, name: "Isoniazid", category: "Tablet", image: img13 },
  { id: 14, name: "Loratadine", category: "Tablet", image: img14 },
  { id: 15, name: "Paracetamol", category: "Tablet", image: img15 },
  { id: 16, name: "Pyrazinamide", category: "Tablet", image: img16 },
  { id: 17, name: "Rifampicin", category: "Tablet", image: img17 },
  { id: 18, name: "Ketoconazole", category: "Tablet", image: img18 },
  { id: 19, name: "Ranitidine HCl", category: "Tablet", image: img19 },
  { id: 20, name: "Ambroxol", category: "Sirup", image: img20 },
  { id: 21, name: "Profed", category: "Sirup", image: img21 },
  { id: 22, name: "Salbutamol Sulphate", category: "Sirup", image: img22 },
  { id: 23, name: "Amoxicillin", category: "Sirup", image: img23 },
  { id: 24, name: "Azithromycin Dihydrate", category: "Sirup", image: img24 },
  { id: 25, name: "Cefumed (Cefuroxime Axetil)", category: "Sirup", image: img25 },
  { id: 26, name: "Cetrilife (Cetrizene Hydrochloride)", category: "Sirup", image: img26 },
  { id: 27, name: "Glavoxy (Amoxicillin + Clavulanic Acid)", category: "Sirup", image: img27 },
  { id: 28, name: "Dextromethorpan", category: "Sirup", image: img28 },
  { id: 29, name: "Erythromycin", category: "Sirup", image: img29 },
  { id: 30, name: "Paracetamol, Guaifenesin, Phenylephrin", category: "Sirup", image: img30 },
  { id: 31, name: "Ibuprofen", category: "Sirup", image: img31 },
  { id: 32, name: "Loracare (Loratadine)", category: "Sirup", image: img32 },
  { id: 33, name: "Natrium Klorida", category: "Infus", image: img33 },
  { id: 34, name: "Ibuprofen", category: "Infus", image: img34 },
  { id: 35, name: "Paracetamol", category: "Infus", image: img35 },
  { id: 36, name: "Levofloxacin", category: "Infus", image: img36 },
  { id: 37, name: "Brear (Albuterol Sulphate)", category: "Inhaler", image: img37 },
  { id: 38, name: "Fluguard (Fluticasone)", category: "Inhaler", image: img38 },
  { id: 39, name: "Liner (Terbutaline Sulphate)", category: "Inhaler", image: img39 },
  { id: 40, name: "Sone (Budesonide)", category: "Inhaler", image: img40 },
  { id: 41, name: "Decongen (Phenylephrine Hydrochloride)", category: "Internasal", image: img41 },
  { id: 42, name: "Legah (Sodium Chloride)", category: "Internasal", image: img42 },
  { id: 43, name: "Oxyde (Oxymetazoline HCl)", category: "Internasal", image: img43 },
  { id: 44, name: "Oxyna (Oxymetazoline HCl)", category: "Internasal", image: img44 },
  { id: 45, name: "Phenol Glycerol 10%", category: "Tetes Telinga", image: img45 },
  { id: 46, name: "Amoxicillin Sodium", category: "Injeksi", image: img46 },
  { id: 47, name: "Azithromycin", category: "Injeksi", image: img47 },
  { id: 48, name: "Ceftriaxone Sodium", category: "Injeksi", image: img48 },
  { id: 49, name: "Cefuroxime Sodium", category: "Injeksi", image: img49 },
  { id: 50, name: "Decongen (Phenylephrine Hydrochloride)", category: "Injeksi", image: img50 },
  { id: 51, name: "Dexamethasone", category: "Injeksi", image: img51 },
  { id: 52, name: "Erythromycin", category: "Injeksi", image: img52 },
  { id: 53, name: "Methylprednisolone", category: "Injeksi", image: img53 },
  { id: 54, name: "Ibuprofen", category: "Injeksi", image: img54 },
  { id: 55, name: "NaCl 3%", category: "Injeksi", image: img55 },
  { id: 56, name: "Dextrose Injection 10%", category: "Injeksi", image: img56 },
  { id: 57, name: "Mannitol 20%", category: "Injeksi", image: img57 },
  { id: 58, name: "Amino Acid IV Infusion", category: "Injeksi", image: img58 },
  { id: 59, name: "Potassium Chloride Injection 10%", category: "Injeksi", image: img59 },
  { id: 60, name: "Glycerin 72%", category: "Injeksi", image: img60 },
];

export default products;
