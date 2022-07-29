const express = require("express");
const app = express();

app.use(express.json());

const psychologists = [
  {
    id: 1,
    imagePerson: "https://i.imgur.com/Sv5T8Dt.png",
    imageType: "https://i.imgur.com/jzp3J3O.png",
    imageCountry: "https://i.imgur.com/C12mH9b.png",
    name: "Stacey Wochner",
    specialties: "☑Obsessive-Compulsive (OCD) ☑Anxiety ☑Coping Skills ",
    contact:
      "https://www.psychologytoday.com/us/therapists/stacey-wochner-los-angeles-ca/140135",
  },
  {
    id: 2,
    imagePerson: "https://i.imgur.com/2UxFdJD.jpg",
    imageType: "https://i.imgur.com/AMngoUX.png",
    imageCountry: "https://i.imgur.com/C12mH9b.png",
    name: "David Davis",
    specialties: "☑Obsessive-Compulsive (OCD) ☑Anxiety ☑Depression",
    contact:
      "https://www.psychologytoday.com/us/therapists/anxiety-ocd-solutions-llc-morgantown-wv/493507",
  },
  {
    id: 3,
    imagePerson: "https://i.imgur.com/tOw0hoe.jpg",
    imageType: "https://i.imgur.com/AMngoUX.png",
    imageCountry: "https://i.imgur.com/C12mH9b.png",
    name: "Chris Leins",
    specialties: "☑Obsessive-Compulsive (OCD) ☑Eating Disorders ☑Anxiety",
    contact:
      "https://www.psychologytoday.com/us/therapists/anxiety-ocd-clinic-of-the-ten-thousand-lakes-burnsville-mn/338768",
  },
  {
    id: 4,
    imagePerson: "https://i.imgur.com/u2NQWd4.png",
    imageType: "https://i.imgur.com/jCSXerm.png",
    imageCountry: "https://i.imgur.com/k83MdP2.png",
    name: "Asociación TOC Granada",
    specialties: "☑Obsessive-Compulsive (OCD) specialists",
    contact:
      "https://tocgranada.com/direccion-contactos-redes-sociales/#:~:text=TEL%C3%89FONO%20PERSONAL%20DEL%20FUNDADOR%20Y,GRANADA%3A%20626%2039%2070%2077",
  },
  {
    id: 5,
    imagePerson: "https://i.imgur.com/rzoTtoc.jpg",
    imageType: "https://i.imgur.com/AMngoUX.png",
    imageCountry: "https://i.imgur.com/C12mH9b.png",
    name: "Ken Goodman",
    specialties: "☑Anxiety ☑Obsessive-Compulsive (OCD) ☑Trauma and PTSD",
    contact:
      "https://www.psychologytoday.com/us/therapists/anxiety-ocd-treatment-of-los-angeles-encino-ca/46850",
  },
  {
    id: 6,
    imagePerson: "https://i.imgur.com/lE8Vcbt.png",
    imageType: "https://i.imgur.com/AMngoUX.png",
    imageCountry: "https://i.imgur.com/k83MdP2.png",
    name: "Psinco Alejandro Ibarra",
    specialties: "☑Obsessive-Compulsive (OCD) specialists",
    contact: "https://alejandroibarra.es/contacto/",
  },
  {
    id: 7,
    imagePerson: "https://i.imgur.com/fCqFWZD.png",
    imageType: "https://i.imgur.com/jCSXerm.png",
    imageCountry: "https://i.imgur.com/C12mH9b.png",
    name: "TB Treatment Center",
    specialties: "☑Obsessive-Compulsive (OCD) ☑Anxiety",
    contact: "https://anxietyocdtampa.com/contact-us/",
  },
  {
    id: 8,
    imagePerson: "https://i.imgur.com/flbz83S.jpg",
    imageType: "https://i.imgur.com/jzp3J3O.png",
    imageCountry: "https://i.imgur.com/C12mH9b.png",
    name: "Natalie Henry",
    specialties: "☑Anxiety ☑Obsessive-Compulsive (OCD) ☑Stress",
    contact:
      "https://www.psychologytoday.com/us/therapists/anxiety-and-ocd-unstuck-therapy-llc-boulder-co/706450",
  },
  {
    id: 9,
    imagePerson: "https://i.imgur.com/OmAcwmw.jpg",
    imageType: "https://i.imgur.com/jzp3J3O.png",
    imageCountry: "https://i.imgur.com/C12mH9b.png",
    name: "Misti Nicholson",
    specialties: "☑Obsessive-Compulsive (OCD) ☑Anxiety ☑Coping Skills",
    contact:
      "https://www.psychologytoday.com/us/therapists/austin-anxiety-and-ocd-specialists-austin-tx/297030",
  },
  {
    id: 10,
    imagePerson: "https://i.imgur.com/vWJe0J8.jpg",
    imageType: "https://i.imgur.com/jzp3J3O.png",
    imageCountry: "https://i.imgur.com/C12mH9b.png",
    name: "Erin Stevens",
    specialties: "☑Obsessive-Compulsive (OCD) ☑Anxiety ☑Stress",
    contact:
      "https://www.psychologytoday.com/us/therapists/anxiety-ocd-treatment-services-auburn-al/218270",
  },
  {
    id: 11,
    imagePerson: "https://i.imgur.com/gq4ABju.png",
    imageType: "https://i.imgur.com/jCSXerm.png",
    imageCountry: "https://i.imgur.com/k83MdP2.png",
    name: "Planeta TOC",
    specialties: "☑Obsessive-Compulsive (OCD) specialists",
    contact: "https://www.planetatoc.com/asociacion-contacto",
  },
  {
    id: 12,
    imagePerson: "https://i.imgur.com/b5JjodK.png",
    imageType: "https://i.imgur.com/jCSXerm.png",
    imageCountry: "https://i.imgur.com/C12mH9b.png",
    name: "CBT Treatment Center",
    specialties: "☑Obsessive-Compulsive (OCD) ☑Anxiety",
    contact: "https://cbtcenterforanxiety.com/contactus/",
  },
  {
    id: 13,
    imagePerson: "https://i.imgur.com/F64sLVV.jpg",
    imageType: "https://i.imgur.com/jzp3J3O.png",
    imageCountry: "https://i.imgur.com/C12mH9b.png",
    name: "Belinda Seiger",
    specialties: "☑Anxiety ☑Obsessive-Compulsive (OCD) ☑ADHD",
    contact:
      "https://www.psychologytoday.com/us/therapists/anxiety-ocd-treatment-center-of-princeton-princeton-nj/419454",
  },
  {
    id: 14,
    imagePerson: "https://i.imgur.com/Vfw7hyU.jpg",
    imageType: "https://i.imgur.com/jCSXerm.png",
    imageCountry: "https://i.imgur.com/C12mH9b.png",
    name: "Louisville OCD Clinic",
    specialties: "☑Obsessive-Compulsive (OCD) ☑Hoarding ☑Spirituality",
    contact:
      "https://www.psychologytoday.com/us/therapists/louisville-ocd-clinic-middletown-ky/701992",
  },
  {
    id: 15,
    imagePerson: "https://i.imgur.com/7Z7bW31.jpg",
    imageType: "https://i.imgur.com/AMngoUX.png",
    imageCountry: "https://i.imgur.com/C12mH9b.png",
    name: "Michael Soderstrom",
    specialties: "☑Obsessive-Compulsive (OCD) specialists",
    contact:
      "https://www.psychologytoday.com/us/therapists/houston-ocd-counseling-houston-tx/66868",
  },
  {
    id: 16,
    imagePerson: "https://i.imgur.com/yXyaRIo.png",
    imageType: "https://i.imgur.com/jCSXerm.png",
    imageCountry: "https://i.imgur.com/C12mH9b.png",
    name: "Nashville Treatment Center",
    specialties: "☑Anxiety ☑Obsessive-Compulsive (OCD)",
    contact: "https://www.ocdnashville.com/contact-us",
  },
  {
    id: 17,
    imagePerson: "https://i.imgur.com/FshnLWy.jpg",
    imageType: "https://i.imgur.com/jCSXerm.png",
    imageCountry: "https://i.imgur.com/C12mH9b.png",
    name: "California Treatment Center ",
    specialties: "☑Anxiety ☑Obsessive-Compulsive (OCD)",
    contact: "https://calocd.com/contact/contact/",
  },
  {
    id: 18,
    imagePerson: "https://i.imgur.com/R5VVPTz.jpg",
    imageType: "https://i.imgur.com/AMngoUX.png",
    imageCountry: "https://i.imgur.com/C12mH9b.png",
    name: "Jason Spielman",
    specialties: "Obsessive-Compulsive (OCD), Anxiety, Autism",
    contact:
      "https://www.psychologytoday.com/us/therapists/anxiety-ocd-treatment-center-of-florida-boca-raton-fl/806587",
  },
];

app.get("/", (req, res) => {
  res.send("Node JS api");
});

app.get("/api/psychologists", (req, res) => {
  res.send(psychologists);
});

app.get("api/psychologists/:id", (req, res) => {
  const psychologist = psychologists.find(
    (c) => c.id === parseInt(req.params.id)
  );
  if (!psychologist) return res.status(404).send("Sychologist not found");
  else res.send(psychologist);
});

app.post("api/psychologists", (req, res) => {
  const psychologist = {
    id: psychologists.length + 1,
    imagePerson: req.body.imagePerson,
    imageType: req.body.imageType,
    name: req.body.name,
    specialties: req.body.specialties,
    contact: req.body.contact,
  };

  psychologists.push(psychologist);
  res.send(psychologist);
});

//const port = process.env.PORT;
app.listen(process.env.PORT, () => console.log(`Port Listening ${process.env.PORT}...`));
