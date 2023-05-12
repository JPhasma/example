import React from 'react';
import { getAllTeletubbies } from '../../../noonoo/getAllTeletubbies';
import Image from 'next/image';

export default function Container({ res }: any) {
  console.log('>>', res);

  return (
    <div>
      {res.map((char: any, index: number) => {
        return (
          <div key={char.name} className={index % 2 ? 'even tubby' : 'tubby'}>
            {/* <a href={`/characters/${char.slug}`}> */}
            <div className='image_container'>
              <Image
                src={char.image_url}
                width={100}
                height={100}
                alt={char.name}
              />
            </div>
            <h3>{char.name}</h3>
            <p>{char.description}</p>

            <ul className='traits'>
              {char.traits.map((trait) => {
                return <li key={Date()}>{trait}</li>;
              })}
            </ul>
            {/* </a> */}
          </div>
        );
      })}
    </div>
  );
}

// // This function gets called at build time
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts
//   const res = await getAllTeletubbies();
//   const posts = await res.json();

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: { res },
//   };
// }
