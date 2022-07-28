const express = require("express");
const app = express();

app.use(express.json());

const psychologists = [
  {
    id: 1,
    imagePerson: "https://i.imgur.com/Sv5T8Dt.png",
    imageType: "",
    imageCountry: "",
    name: "Stacey Wochner",
    specialties: "Obsessive-Compulsive (OCD), Anxiety, Coping Skills ",
    contact:
      "https://www.psychologytoday.com/us/therapists/stacey-wochner-los-angeles-ca/140135",
  },
  {
    id: 2,
    imagePerson: "https://i.imgur.com/2UxFdJD.jpg",
    imageType: "",
    imageCountry: "",
    name: "David Davis",
    specialties: "Obsessive-Compulsive (OCD), Anxiety, Depression",
    contact:
      "https://www.psychologytoday.com/us/therapists/anxiety-ocd-solutions-llc-morgantown-wv/493507",
  },
  {
    id: 3,
    imagePerson: "https://i.imgur.com/tOw0hoe.jpg",
    imageType: "",
    imageCountry: "",
    name: "Chris Leins",
    specialties: "Obsessive-Compulsive (OCD), Eating Disorders, Anxiety",
    contact:
      "https://www.psychologytoday.com/us/therapists/anxiety-ocd-clinic-of-the-ten-thousand-lakes-burnsville-mn/338768",
  },
  {
    id: 4,
    imagePerson: "https://i.imgur.com/u2NQWd4.png",
    imageType: "",
    imageCountry: "",
    name: "Asociación TOC Granada",
    specialties: "Obsessive-Compulsive (OCD)",
    contact:
      "https://tocgranada.com/direccion-contactos-redes-sociales/#:~:text=TEL%C3%89FONO%20PERSONAL%20DEL%20FUNDADOR%20Y,GRANADA%3A%20626%2039%2070%2077",
  },
  {
    id: 5,
    imagePerson: "https://i.imgur.com/rzoTtoc.jpg",
    imageType: "",
    imageCountry: "",
    name: "Ken Goodman",
    specialties: "Anxiety, Obsessive-Compulsive (OCD), Trauma and PTSD",
    contact:
      "https://www.psychologytoday.com/us/therapists/anxiety-ocd-treatment-of-los-angeles-encino-ca/46850",
  },
  {
    id: 6,
    imagePerson: "https://i.imgur.com/CgphItR.png",
    imageType: "",
    imageCountry: "",
    name: "Psinco Alejandro Ibarra",
    specialties: "Obsessive-Compulsive (OCD)",
    contact: "https://alejandroibarra.es/contacto/",
  },
  {
    id: 7,
    imagePerson: "https://i.imgur.com/rlGI3NF.png",
    imageType: "",
    imageCountry: "",
    name: "Anxiety & OCD Treatment",
    specialties: "Obsessive-Compulsive (OCD), Anxiety",
    contact: "https://anxietyocdtampa.com/contact-us/",
  },
  {
    id: 8,
    imagePerson: "https://i.imgur.com/flbz83S.jpg",
    imageType: "",
    imageCountry: "",
    name: "Natalie Henry",
    specialties: "Anxiety, Obsessive-Compulsive (OCD), Stress",
    contact:
      "https://www.psychologytoday.com/us/therapists/anxiety-and-ocd-unstuck-therapy-llc-boulder-co/706450",
  },
  {
    id: 9,
    imagePerson: "https://i.imgur.com/OmAcwmw.jpg",
    imageType: "",
    imageCountry: "",
    name: "Misti Nicholson",
    specialties: "Obsessive-Compulsive (OCD), Anxiety, Coping Skills",
    contact:
      "https://www.psychologytoday.com/us/therapists/austin-anxiety-and-ocd-specialists-austin-tx/297030",
  },
  {
    id: 10,
    imagePerson: "https://i.imgur.com/vWJe0J8.jpg",
    imageType: "",
    imageCountry: "",
    name: "Erin Stevens",
    specialties: "Obsessive-Compulsive (OCD), Anxiety, Stress",
    contact:
      "https://www.psychologytoday.com/us/therapists/anxiety-ocd-treatment-services-auburn-al/218270",
  },
  {
    id: 11,
    imagePerson: "https://i.imgur.com/RhD60VJ.png",
    imageType: "",
    imageCountry: "",
    name: "Planeta TOC",
    specialties: "Obsessive-Compulsive (OCD)",
    contact: "https://www.planetatoc.com/asociacion-contacto",
  },
  {
    id: 12,
    imagePerson: "https://i.imgur.com/DdAQiQ1.png",
    imageType: "",
    imageCountry: "",
    name: "CBT Center For Anxiety + OCD",
    specialties: "Obsessive-Compulsive (OCD), Anxiety",
    contact: "https://cbtcenterforanxiety.com/contactus/",
  },
  {
    id: 13,
    imagePerson: "https://i.imgur.com/F64sLVV.jpg",
    imageType: "",
    imageCountry: "",
    name: "Belinda Seiger",
    specialties: "Anxiety, Obsessive-Compulsive (OCD), ADHD",
    contact:
      "https://www.psychologytoday.com/us/therapists/anxiety-ocd-treatment-center-of-princeton-princeton-nj/419454",
  },
  {
    id: 14,
    imagePerson: "https://i.imgur.com/Vfw7hyU.jpg",
    imageType: "",
    imageCountry: "",
    name: "Louisville OCD Clinic",
    specialties: "Obsessive-Compulsive (OCD), Hoarding, Spirituality",
    contact:
      "https://www.psychologytoday.com/us/therapists/louisville-ocd-clinic-middletown-ky/701992",
  },
  {
    id: 15,
    imagePerson: "https://i.imgur.com/7Z7bW31.jpg",
    imageType: "",
    imageCountry: "",
    name: "Michael Soderstrom",
    specialties: "",
    contact:
      "https://www.psychologytoday.com/us/therapists/houston-ocd-counseling-houston-tx/66868",
  },
  {
    id: 16,
    imagePerson: "https://i.imgur.com/yXyaRIo.png",
    imageType: "",
    imageCountry: "",
    name: "Nashville OCD Anxiety Treatment Center",
    specialties: "Anxiety, Obsessive-Compulsive (OCD)",
    contact: "https://www.ocdnashville.com/contact-us",
  },
  {
    id: 17,
    imagePerson: "https://i.imgur.com/FshnLWy.jpg",
    imageType: "",
    imageCountry: "",
    name: "Cal OCD",
    specialties: "",
    contact: "https://calocd.com/contact/contact/",
  },
  {
    id: 18,
    imagePerson: "https://i.imgur.com/R5VVPTz.jpg",
    imageType: "",
    imageCountry: "",
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

const port = process.env.PORT;
app.listen(port, () => console.log(`Port Listening ${port}...`));
