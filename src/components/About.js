import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

function About(props) {
  return (
    <>
      <h1 className="text-center mt-3">About</h1>
      <p className="mt-5">
        Bu proje 78. Adana Full Stack Web Development Bootcamp kursunda verilen
        ödev üzerine yapıldı. Bu proje veritabanında (henüz veritabanı
        kullanmadığımız için json dosyası üzerinde) bulunan filmler hakkında
        yönetmeni, imdb puanı, filmin konusu ve fragmanı hakkında,
        kullanıcıların bilgi sahibi olması üzerine yapıldı.{" "}
      </p>
      <hr />
      <p>
        Filmleri görmek için Explore Movies sekmesinden filmlere ulaşabilir ve
        film hakkındaki detaylara erişebilmek için ise filmin altında bulunan
        details butonuna basabilirsiniz. Film hakkında detaylı bilginin tamamını
        gösterip bilgi kalabalığı yapmak yerine CSS ile ilk 3 satırını Explore
        Movies sekmesinde gösterdim. Detaylı bilgiler ise details butonuna
        tıklandığında açılan sekmede filmin fotoğrafı ve fragmanın altından
        görebilirsiniz. Filmin bütün bilgilerini(Fotoğraf, Fragman, Yönetmen,
        IMDB puanı, detaylar) movies.json içerisinden çağırdım. movies.json
        dosyasını ise github üzerindeki örneklere bakarak kendim oluşturdum.
      </p>
      <hr />
      <Card className="text-center mb-3">
        <Card.Title className="mt-5">
          Projede kullanılan teknolojiler
        </Card.Title>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item>React</ListGroup.Item>
            <ListGroup.Item>Bootstrap</ListGroup.Item>
            <ListGroup.Item>React Bootstrap</ListGroup.Item>
            <ListGroup.Item>React Router Dom</ListGroup.Item>
            <ListGroup.Item>
              Verilerin tutulması için movies.json
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <Container>
        <Row />
      </Container>
    </>
  );
}

export default About;
