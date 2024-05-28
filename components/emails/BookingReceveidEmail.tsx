import { Reservation } from "@prisma/client";
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

const BookingReceveidEmail = ({reservationData}: {reservationData: Reservation}) => {
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
              Votre réservation est confirmée !
            </Heading>
            <Text style={global.text}>
              Êtes vous prêt à venir défier la Villa ?
            </Text>
            <Text style={{ ...global.text, marginTop: 24 }}>
              Vous trouverez ci-dessous les détails de votre réservation.
            </Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Row style={{ display: "inline-flex gap-16", marginBottom: 40 }}>
              <Column style={{ width: 170 }}>
                <Text style={global.paragraphWithBold}>Date</Text>
                <Text style={global.paragraphWithBold}>{reservationData.date?.toString() || ''}</Text>
              </Column>
              <Column style={{ marginLeft: 20 }}>
                <Text style={global.paragraphWithBold}>Heure</Text>
                <Text style={global.paragraphWithBold}>{reservationData.time || ''}</Text>
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
                Contactez-nous à lavillaeffroi@gmail.com pour toutes questions.
                (Ne pas répondre à cet email))
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

export default BookingReceveidEmail;

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
  lineHeight: "2",
};

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY,
  },
  paragraphWithBold: { ...paragraph, fontWeight: "bold" },
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
    width: "166px",
    margin: "auto",
  },
  text: {
    margin: "0",
    color: "#AFAFAF",
    fontSize: "13px",
    textAlign: "center",
  } as React.CSSProperties,
};
