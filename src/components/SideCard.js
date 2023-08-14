import { Button, Alert, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
const BANNER = "https://cdn2.tfx.company/images/clickwallpapers-pokemon-4k-img2.jpg";



const SideCard = () => (
  <>
    <Alert color="info" className="d-none d-lg-block">
      {/* <strong>It's {pokemon} </strong> */}
    </Alert>
    <Card>
      <CardImg top width="100%" src={BANNER} alt="Pokemon" />
      <CardBody>
        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">
          Pokemon Name
        </CardTitle>
        <CardSubtitle
          className="text-secondary mb-3 font-weight-light text-uppercase"
          style={{ fontSize: "0.8rem" }}
        >
          Pokemon Type
        </CardSubtitle>
        <CardText
          className="text-secondary mb-4"
          style={{ fontSize: "0.75rem" }}
        >
          Small Pokemon Bio
        </CardText>
        <Button color="success" className="font-weight-bold">
          View Profile
        </Button>
      </CardBody>
    </Card>
  </>
);
export default SideCard;