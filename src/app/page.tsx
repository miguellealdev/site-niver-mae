import Image from 'next/image';

export default function Home() {
   return (
      <>
         <h1 className="text-yellow-400 text-xl font-bold text-center p-2">
            Olá eu sou Miguel
         </h1>
         <h2 className="p-4">
            Io mãe fiz esse site para comemerar o seu niver e coloquei fotos
            nossas e muito amor o site e bem simples, te amo muito deus te
            abensoe e te ilumine.
         </h2>
         <div className="flex flex-wrap gap-2 p-4">
            {/* Div com moldura branca */}
            <div className="flex flex-col px-1 pt-1 pb-9 bg-white">
               <Image
                  className="flex w-auto max-h-72 object-cover"
                  src="images/mae_eu_ju_predio.jpg"
                  alt="Foto eu e mãe no museu"
               />
               <p className="text-black text-center">
                  {' '}
                  esse dia foi marcante e muito divertido
               </p>
            </div>
            <div className="flex flex-col px-1 pt-1 pb-9 bg-white">
               <Image
                  className="flex w-auto max-h-72 object-cover"
                  src="images/mae_eu_mc.jpg"
                  alt="Foto eu e mãe no museu"
               />
               <p className="text-black text-center">
                  comi muito nesse dia, lembra da spritk sem gás{' '}
               </p>
            </div>
            <div className="flex flex-col px-1 pt-1 pb-9 bg-white">
               <Image
                  className="flex w-auto max-h-72 object-cover"
                  src="images/mae_eu_museu_2.jpg"
                  alt="Foto eu e mãe no museu"
               />
               <p className="text-black text-center">fiquei moscano na foto</p>
            </div>
            <div className="flex flex-col px-1 pt-1 pb-9 bg-white">
               <Image
                  className="flex w-auto max-h-72 object-cover"
                  src="images/mae_eu_museu_3.jpg"
                  alt="Foto eu e mãe no museu"
               />
               <p className="text-black text-center">
                  te amo muito muito muito mesmo
               </p>
            </div>
            <div className="flex flex-col px-1 pt-1 pb-9 bg-white">
               <Image
                  className="flex w-auto max-h-72 object-cover"
                  src="images/mae_eu_museu.jpg"
                  alt="Foto eu e mãe no museu"
               />
               <p className="text-black text-center">
                  esse dia foi muito legal
               </p>
            </div>
            <div className="flex flex-col px-1 pt-1 pb-9 bg-white">
               <Image
                  className="flex w-auto max-h-72 object-cover"
                  src="images/mae_ju_estadio.jpg"
                  alt="Foto eu e mãe no museu"
               />
               <p className="text-black text-center">fui fotográfo</p>
            </div>
            <div className="flex flex-col px-1 pt-1 pb-9 bg-white">
               <Image
                  className="flex w-auto max-h-72 object-cover"
                  src="images/mae_ju_predio.jpg"
                  alt="Foto eu e mãe no museu"
               />
               <p className="text-black text-center">parabéns pra você</p>
            </div>
            <div className="flex flex-col px-1 pt-1 pb-9 bg-white">
               <Image
                  className="flex w-auto max-h-72 object-cover"
                  src="images/mae_sozinha_predio.jpg"
                  alt="Foto eu e mãe no museu"
               />
               <p className="text-black text-center">
                  você e muito maravilhosa
               </p>
            </div>
         </div>
      </>
   );
}
