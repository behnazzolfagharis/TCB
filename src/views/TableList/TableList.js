import React, { useState, useEffect } from "react";
import { axios } from 'axios'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import Grid from '@material-ui/core/Grid';
import CustomInput from "components/CustomInput/CustomInput.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from '@material-ui/core/TextField';
import './TabelList.css'
import Button from "components/CustomButtons/Button.js";
import CardFooter from "components/Card/CardFooter.js";

import { Form, } from 'react-bootstrap'

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};
const bgColor = '#0f58d6'

const useStyles = makeStyles(styles);

export default function TableList() {

  const [name, setName] = useState('')
  const [id, setId] = useState();
  const [description, setDescription] = useState('');
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false)

  /*
for upload file 

  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const [fileInfos, setFileInfos] = useState([]);

*/

  const classes = useStyles();
  const handelNameSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.form1
    setName(value);
    axios.post('http://biftorserver/api', { name, value })


  }


  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="danger">
            <h4 className={classes.cardTitleWhite}>اضافه کردن محصول </h4>

          </CardHeader>
          <CardBody>
            <GridItem xs={12} sm={12} md={6}>

              <Grid container spacing={3}>

                <Grid item xs>
                  <form onSubmit={handelNameSubmit}>

                    <TextField
                      label="نام محصول"
                      id="margin-none"
                      name="form1"
                      className={classes.textField}
                      style={{ padding: 20 }}
                    />

                  </form>
                </Grid>


                <Grid item xs>
                  <TextField
                    label="ای دی محصول"
                    id="margin-none"
                    style={{ padding: 20 }}
                    className={classes.textField}

                  />

                </Grid>


              </Grid>
            </GridItem>

            <GridItem xs={12} sm={12} md={12} >

              <CustomInput
                style={{ padding: 20 }}
                labelText="توضیحات محصول"
                id="about-me"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
            </GridItem>

            <GridItem xs={4} sm={4} md={4} >

              <Form>
                <Form.File
                  style={{ padding: 20 }}
                  id="custom-file"
                  label="بار گزاری عکس محصول "
                  custom
                />
              </Form>





            </GridItem>

          </CardBody>
          <CardFooter>
            <Button type="submit" color="warning">ثبت تغییرات </Button>
          </CardFooter>

        </Card>
      </GridItem>



    </GridContainer>
  );
}
