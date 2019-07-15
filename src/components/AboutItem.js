import React, { Fragment } from "react";
import { Grid, TextField, Button, GridList, GridListTile, Typography, Paper, Card, CardContent, Divider, CardHeader } from "@material-ui/core";

function AboutItem (props) {

  return (
    <Fragment>
      {/* <Grid item sm={12} style={{paddingTop: 10, paddingLeft: 5, marginBottom: -10}}>
         <Typography variant="h5" gutterBottom align="left">About this item</Typography>
      </Grid> */}

      <Paper className={props.classes.paper} square={true}>
        <Grid container style={{padding: 5}}>

          <Typography variant="h5" gutterBottom align="left">About this item</Typography>
          <Grid item xs={12}>
            <Divider style={{marginBottom: 20}}/>
          </Grid>

          <Grid item xs={10}>
            <Grid container>
              

{/* Row 1 */}
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom align="left">Condition</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom align="left">New</Typography>
              </Grid>
{/* Row 2 */}
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom align="left">Quantity</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" align="left">Almost Gone</Typography>
                <Typography variant="body1" gutterBottom align="left">7 Watching</Typography>
              </Grid>
{/* Row 1 */}
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom align="left">Category</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom align="left">{props.currentItem.category}</Typography>
              </Grid>

            </Grid>
          </Grid>

        {/* COL2 */}
        <Grid item xs={4} style={{padding: 5}}>

        </Grid>
          <Grid item sm={4} style={{padding: 5}}>
           
          </Grid>

          <Grid item xs={12}>
            <Divider style={{marginBottom: 10}}/>
          </Grid>

          <Typography variant="subtitle1" gutterBottom align="left"><b>Item Description</b></Typography>
          <Typography variant="body2" align="left">
          Antique Anchor Wilcox Crittenden Fishermans Anchor Kedge Anchor at only 5 lbs  great size for wall hanging Marked with WC Logo.  FREE SHIPPING with USPS Priority Mail.
            
          </Typography>

        </Grid>
      </Paper>
    </Fragment>

)
}

export default AboutItem;