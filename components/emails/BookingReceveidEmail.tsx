import { Reservation, BookedSlot, Experience } from "@prisma/client";
import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

const formatDate = (date: Date | null | undefined): string => {
  if (!date) return '';
  return date.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

type ReservationWithDetails = Reservation & { bookedSlot: BookedSlot, experience: Experience };

const BookingReceivedEmail = ({ reservationData }: { reservationData: ReservationWithDetails }) => {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://escape-game-pi.vercel.app";

  return (
    <Html>
      <Head />
      <Preview>Votre réservation chez la Villa de l&apos;Effroi</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={message}>
            <Heading style={global.heading}>
              Réservation confirmée !
            </Heading>
            <Text style={global.text}>
              Êtes-vous prêt à venir défier la Villa ?
            </Text>
            <Text style={{ ...global.text, marginTop: 24 }}>
              Vous trouverez ci-dessous les détails de votre réservation.
            </Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Row style={{ display: "inline-flex gap-16", marginBottom: 20 }}>
              <Column style={{ width: 170 }}>
                <Text style={global.paragraphWithBold}>Date</Text>
                <Text style={global.paragraphDescription}>{formatDate(reservationData.bookedSlot.date)}</Text>
              </Column>
              <Column style={{ marginLeft: 20 }}>
                <Text style={global.paragraphWithBold}>Heure</Text>
                <Text style={global.paragraphDescription}>{reservationData.bookedSlot.time}</Text>
              </Column>
            </Row>
            <Row style={{ display: "inline-flex gap-16", marginBottom: 20 }}>
              <Column style={{ width: 170 }}>
                <Text style={global.paragraphWithBold}>Expérience</Text>
                <Text style={global.paragraphDescription}>{reservationData.experience.name}</Text>
              </Column>
              <Column style={{ marginLeft: 20 }}>
                <Text style={global.paragraphWithBold}>Nombre de personnes</Text>
                <Text style={global.paragraphDescription}>{reservationData.people}</Text>
              </Column>
            </Row>
            <Row style={{ display: "inline-flex gap-16", marginBottom: 20 }}>
              <Column style={{ width: 170 }}>
                <Text style={global.paragraphWithBold}>Prix</Text>
                <Text style={global.paragraphDescription}>{reservationData.price}</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={global.hr} />

          <Section style={paddingY}>
            <Row>
              <Text
                style={{
                  ...footer.text,
                  paddingTop: 30,
                  paddingBottom: 30,
                }}
              >
                Contactez-nous à lavillaeffroi@gmail.com pour toutes questions. <br />
                (Ne pas répondre à cet email).
              </Text>
            </Row>
            <Row>
              <Text style={footer.text}>© La Villa de l&apos;Effroi.</Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default BookingReceivedEmail;

const paddingX = {
  paddingLeft: "40px",
  paddingRight: "40px",
};

const paddingY = {
  paddingTop: "22px",
  paddingBottom: "22px",
};

const paragraph = {
  margin: "0",
  lineHeight: "1.5",
};

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY,
  },
  paragraphWithBold: { ...paragraph, fontWeight: "bold" },
  paragraphDescription: { ...paragraph },
  heading: {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: "-1px",
  } as React.CSSProperties,
  text: {
    ...paragraph,
    color: "#747474",
    fontWeight: "500",
  },
  button: {
    border: "1px solid #929292",
    fontSize: "16px",
    textDecoration: "none",
    padding: "10px 0px",
    width: "220px",
    display: "block",
    textAlign: "center",
    fontWeight: 500,
    color: "#000",
  } as React.CSSProperties,
  hr: {
    borderColor: "#E5E5E5",
    margin: "0",
  },
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "10px auto",
  width: "600px",
  maxWidth: "100%",
  border: "1px solid #E5E5E5",
};

const track = {
  container: {
    padding: "22px 40px",
    backgroundColor: "#F7F7F7",
  },
  number: {
    margin: "12px 0 0 0",
    fontWeight: 500,
    lineHeight: "1.4",
    color: "#6F6F6F",
  },
};

const message = {
  padding: "40px 74px",
  textAlign: "center",
} as React.CSSProperties;

const adressTitle = {
  ...paragraph,
  fontSize: "15px",
  fontWeight: "bold",
};

const footer = {
  policy: {
    width: "600px",
    maxWidth: "100%",
    margin: "0 auto",
  },
  links: {
    marginTop: "8px",
  } as React.CSSProperties,
  text: {
    color: "#A3A3A3",
    fontWeight: 500,
    margin: 0,
    lineHeight: "1.5",
    fontSize: "12px",
  } as React.CSSProperties,
};
