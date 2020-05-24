<template>
  <div class="site">
    <table
      id="main_table"
      style="padding:5px;width:100%;border-collapse: collapse"
    >
      <tr style="height:50px;background-color:red">
        <td style="text-align:center;width:30%;color:yellow;font-size:30px">
          <img
            style="vertical-align: middle;"
            src="@/assets/images/dragon-small.png"
            alt="Golden Dragon"
            height="50px"
          />
          <span style="font-family:'chinese_takeawayregular'"
            >De Gouden Draak</span
          >
          <img
            style="vertical-align: middle;"
            src="@/assets/images/dragon-small-flipped.png"
            alt="Golden Dragon"
            height="50px"
          />
        </td>
        <td>
          <router-link
            to=""
            style="color:yellow;font-weight:bold;text-decoration: none;"
          >
            <marquee behavior="scroll" direction="left">
              Welkom bij De Gouden Draak. Klik op deze tekst om de aanbiedingen
              van deze week te zien!
            </marquee>
          </router-link>
        </td>
        <td style="text-align:center;width:30%;color:yellow;font-size:30px">
          <img
            style="vertical-align: middle;"
            src="@/assets/images/dragon-small.png"
            alt="Golden Dragon"
            height="50px"
          />
          <span style="font-family:'chinese_takeawayregular'"
            >De Gouden Draak</span
          >
          <img
            style="vertical-align: middle;"
            src="@/assets/images/dragon-small-flipped.png"
            alt="Golden Dragon"
            height="50px"
          />
        </td>
      </tr>
    </table>

    <table
      id="main_table"
      style="padding:5px;width:100%;border-collapse: collapse"
    >
      <tr style="height:7px;background-color:red">
        <td colspan="9"></td>
      </tr>

      <tr></tr>
      <tr style="height:25px;background-color:red">
        <td width="7px"></td>
        <td
          style="width:25px;border-left:4px solid yellow;border-top:4px solid yellow"
        ></td>
        <td
          style="width:25px;border-right:4px solid yellow;border-top:4px solid yellow"
        ></td>
        <td
          style="width:25px;border-right:4px solid yellow;border-bottom:4px solid yellow"
        ></td>
        <td
          style="border-top:4px solid yellow;border-bottom:4px solid yellow"
        ></td>
        <td
          style="width:25px;border-left:4px solid yellow;border-bottom:4px solid yellow"
        ></td>
        <td
          style="width:25px;border-left:4px solid yellow;border-top:4px solid yellow"
        ></td>
        <td
          style="width:25px;border-right:4px solid yellow;border-top:4px solid yellow"
        ></td>
        <td width="7px"></td>
      </tr>

      <tr style="height:25px;background-color:red">
        <td width="7px"></td>
        <td
          style="width:25px;border-left:4px solid yellow;border-bottom:4px solid yellow"
        ></td>
        <td style="width:25px;border:4px solid yellow"></td>
        <td style="width:25px;border:4px solid yellow"></td>
        <td></td>
        <td style="width:25px;border:4px solid yellow"></td>
        <td style="width:25px;border:4px solid yellow"></td>
        <td
          style="width:25px;border-right:4px solid yellow;border-bottom:4px solid yellow"
        ></td>
        <td width="7px"></td>
      </tr>

      <tr style="height:25px;background-color:red">
        <td width="7px"></td>
        <td
          style="width:25px;border-right:4px solid yellow;border-bottom:4px solid yellow"
        ></td>
        <td style="width:25px;border:4px solid yellow"></td>
        <td style="width:25px"></td>
        <td></td>
        <td style="width:25px"></td>
        <td style="width:25px;border:4px solid yellow"></td>
        <td style="width:25px;border-bottom:4px solid yellow"></td>
        <td width="7px"></td>
      </tr>

      <tr style="height:50px;background-color:red">
        <td width="7px"></td>
        <td
          style="width:25px;border-right:4px solid yellow;border-left:4px solid yellow"
        ></td>
        <td style="width:25px;"></td>
        <td style="width:25px;"></td>
        <td style="text-align:center">
          <!-- CONTENT HERE! -->
          <table width="100%">
            <tr>
              <td colspan="3">
                <p>
                  <img
                    src="@/assets/images/dragon-small.png"
                    style="float:left;height:200px"
                    alt="Golden Dragon"
                  />
                  <img
                    src="@/assets/images/dragon-small-flipped.png"
                    style="float:right;height:200px"
                    alt="Golden Dragon"
                  />
                  <span style="font-size:40px;font-weight:bold;color:yellow"
                    >Chinees Indische Specialiteiten</span
                  ><br />
                  <span style="font-size:50px;font-weight:bold;color:yellow"
                    >De Gouden Draak</span
                  ><br />
                </p>
                <p>
                  <table style="margin:auto;font-size:20px;color:white" border="1px solid white">
										<tr class="gradient" background="/img/menu_bg_gradient.png">
											<td valign="middle">
												<router-link to="Menu" style="color:white">
													&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Menukaart&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
												</router-link>
											</td>
											<td valign="middle">
												<router-link to="News" style="color:white">
													&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nieuws&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
												</router-link>
											</td>
											<td valign="middle">
												<router-link to="Contact" style="color:white">
													&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
												</router-link>
											</td>
										</tr>
									</table>
                </p>
              </td>
            </tr>
            <tr style="padding-top:50px">
              <td colspan="3" height="50px"></td>
            </tr>
            <tr style="padding-top:50px">
              <td width="50px"></td>
              <td
                align="center"
                style="font-size:5;border:1px solid black;background:floralwhite"
              >
                <slot/>
              </td>
              <td width="50px"></td>
            </tr>
          </table>

          <br />
          <div text-align="center">
            <router-link to="Contact">Naar Contact</router-link>
          </div>
        </td>
        <td style="width:25px;"></td>
        <td style="width:25px;"></td>
        <td
          style="width:25px;border-right:4px solid yellow;border-left:4px solid yellow"
        ></td>
        <td width="7px"></td>
      </tr>

      <tr style="height:25px;background-color:red">
        <td width="7px"></td>
        <td
          style="width:25px;border-right:4px solid yellow;border-top:4px solid yellow"
        ></td>
        <td style="width:25px;border:4px solid yellow"></td>
        <td style="width:25px"></td>
        <td></td>
        <td style="width:25px"></td>
        <td style="width:25px;border:4px solid yellow"></td>
        <td style="width:25px;border-top:4px solid yellow"></td>
        <td width="7px"></td>
      </tr>

      <tr style="height:25px;background-color:red">
        <td width="7px"></td>
        <td
          style="width:25px;border-left:4px solid yellow;border-top:4px solid yellow"
        ></td>
        <td style="width:25px;border:4px solid yellow"></td>
        <td style="width:25px;border:4px solid yellow"></td>
        <td></td>
        <td style="width:25px;border:4px solid yellow"></td>
        <td style="width:25px;border:4px solid yellow"></td>
        <td
          style="width:25px;border-right:4px solid yellow;border-top:4px solid yellow"
        ></td>
        <td width="7px"></td>
      </tr>

      <tr style="height:25px;background-color:red">
        <td width="7px"></td>
        <td
          style="width:25px;border-left:4px solid yellow;border-bottom:4px solid yellow"
        ></td>
        <td
          style="width:25px;border-right:4px solid yellow;border-bottom:4px solid yellow"
        ></td>
        <td style="width:25px;border-right:4px solid yellow"></td>
        <td
          style="border-top:4px solid yellow;border-bottom:4px solid yellow"
        ></td>
        <td style="width:25px;border-left:4px solid yellow;"></td>
        <td
          style="width:25px;border-left:4px solid yellow;border-bottom:4px solid yellow"
        ></td>
        <td
          style="width:25px;border-right:4px solid yellow;border-bottom:4px solid yellow"
        ></td>
        <td width="7px"></td>
      </tr>

      <tr style="height:7px;background-color:red">
        <td colspan="9"></td>
      </tr>

      <tr></tr>
    </table>
  </div>
</template>

<style lang="scss">
body {
  background-color: darkred;
}

.site {
  margin: 15px;
  margin-left: 50px;
  margin-right: 50px;
  font-family: 'Dejavu Serif Bold';

  a {
    text-decoration: none;
    color: yellow;
  }

  td {
    padding: 0px;
    font-weight: bold;
  }

  h1,
  h2,
  h3,
  u {
    font-weight: bold;
  }
  .gradient {
    background: linear-gradient(to bottom, #00f4ff 0%, #0053ff 100%);

    td {
      width: 11rem;
    }
  }
}
</style>
