import React, {useState, createContext,useEffect} from "react";

export const MoviesContext = createContext() ;

export const MoviesProvider = (props) => {
    
    const [movies, setMovies] = useState([{
        url:'https://media.senscritique.com/media/000019142368/source_big/1917.jpg',
        movieName: '1917',
        description:'artially inspired by stories told to Mendes by his paternal grandfather Alfred about his service during World War I,[6] the film takes place after the German retreat to the Hindenburg Line during Operation Alberich, and follows two British soldiers ',
        rate:'4.4',
        id:1
    },
    {
        url:'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F600aeac6c137d4b263be84f3%2F-Godzilla-Vs--Kong--poster%2F1960x0.jpg%3Ffit%3Dscale',
        movieName: 'GODZILLA VS KONG',
        description:'Kong is a 2021 American monster film directed by Adam Wingard. In the film, Kong clashes with Godzilla as humans lure the ape into the Hollow Earth to retrieve a power source for a secret weapon to stop Godzilla\'s mysterious rampages. ...',
        rate:'3.2',
        id:2
    },
    {
        url:'https://static.wikia.nocookie.net/dreamworks/images/5/5f/B3B13E6A-B311-4264-8353-76F72E4E5D20.jpeg',
        movieName: 'CATCH ME IF YOU CAN',
        description:'A true story about Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars worth of checks as a Pan Am pilot, doctor, and legal prosecutor. An FBI agent makes it his mission to put him behind bars. But Frank not only eludes capture, he revels in the pursuit.',
        rate:'4.5',
        id:3
    },
    {
        url:'http://www.ecran-et-toile.com/uploads/5/5/8/7/55875205/lalaland_orig.jpg',
        movieName: 'LA LA LAND',
        description:'Written and directed by Damien Chazelle, LA LA LAND centers on Mia (Emma Stone), an actress still waiting for her break, and Sebastian (Ryan Gosling), a brilliant jazz pianist who dreams of opening up his own club where great jazz musicians will make beautiful music and patrons will learn about and celebrate the art ..',
        rate:'2.9',
        id:4
    },
    {
        url:'https://file1.grazia.fr/var/grazia/storage/images/1/2/7/4/8/12748827/guillaume-canet-affiche-lui-jpg.jpg?alias=original',
        movieName: 'LUI',
        description:'Lacking inspiration, a composer isolates himself at a desolate house, on a small island, in Brittany. There he finds an old piano and receives visits from people who won\'t let him rest. Lacking inspiration, a composer isolates himself at a desolate house, on a small island',
        rate:'4.2',
        id:5
    },
    {
        url:'https://lh3.googleusercontent.com/proxy/zsFAmZyXxiSacGlGiaQ4xF2x6KTWOWwjLFUK6KhRwCkqWopuwYH1aS2QTjs5DvOxr_sP6Btk9VTeh3raElR9U4J3FavoJVC2Fru-BeHKm9CAE4IcmJbWOsIuBBlOgVXWoOGEHKSx',
        movieName: 'LES ARDENNES',
        description:'A brutal home-jacking by two brothers goes hopelessly wrong, and one of them goes to prison. Four years later, his brother tries to help him get his life back on track.',
        rate:'2.3',
        id:6
    },
    {
        url:'https://fr.web.img3.acsta.net/pictures/17/01/25/09/36/363964.jpg',
        movieName: 'LION',
        description:'Based on the true story of Saroo Brierley who, at the age of 5, was separated from his family in India as he fell asleep on a train and woke up 1600 kilometers away from home. Saroo was later adopted by an Australian couple and after 25 years, he began searching for his Indian family.',
        rate:'4.9',
        id:7
    },
    {
        url:'https://www.premiere.fr/sites/default/files/styles/scale_crop_336x486/public/2018-12/Capture%20d%E2%80%99e%CC%81cran%202018-12-19%20a%CC%80%2015.12.23.png',
        movieName: 'BORDER',
        description:'Tina works for the Swedish Customs Service and uses her heightened olfactory sense to detect human emotions, including guilt and shame, together with the contraband that the humans are smuggling. She has a strongly Neanderthalic appearance and lives in a secluded house in the woods with Roland, a dog trainer.',
        rate:'3.5',
        id:8
    },
    {
        url:'https://thumbnails.cbsig.net/_x/w370/CBS_Production_Entertainment_VMS/PP_12846_QNPN_Movie_Assets_SAlone_Poster_1400x2100.jpg',
        movieName: 'QUEENSPINS',
        description:'The film is based on the true story of three Arizona women arrested in 2012 for a $40 million fraud involving ... ... The opening scenes show Bell\'s character getting arrested before a flashback to explain what happened. She does not seem to take it too seriously, telling us that "this is a story about little old coupons',
        rate:'3.3',
        id:9
    }
    
]);
useEffect(()=>{
  const data = localStorage.getItem('movies');
  if (data) {
   setMovies(JSON.parse(data))    
  }
   
},[])
useEffect(()=>{
    localStorage.setItem('movies',JSON.stringify(movies))
},[movies])
return (
    <MoviesContext.Provider value={[movies, setMovies]}>
        {props.children}
    </MoviesContext.Provider>
);
}