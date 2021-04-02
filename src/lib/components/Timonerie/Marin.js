import React, { Component } from "react"

class Marin extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div id="marin" style={{ left: `${this.props.x}%` }} class={this.props.moving === "left" ? "movingLeft": this.props.moving === "right" ? "movingRight" : ""}>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{isolation:"isolate"}} viewBox="767 330.967 409.5 719.033">
          <defs>
            <clipPath id="_clipPath_LKvdILx8zLPlP607JwmKBEKmVPI3RgNI">
              <rect x="767" y="330.967" width="409.5" height="719.033"/>
            </clipPath>
          </defs>
          <g clip-path="url(#_clipPath_LKvdILx8zLPlP607JwmKBEKmVPI3RgNI)">
            <rect x="767" y="330.967" width="409.5" height="719.033" style={{fill:"rgb(87,87,87)", fillOpacity:"0"}}/>
            <path id="leftLeg" d="M 823.224 820 L 851.776 820 C 857.695 820 862.5 824.805 862.5 830.724 L 862.5 1039.276 C 862.5 1045.195 857.695 1050 851.776 1050 L 823.224 1050 C 817.305 1050 812.5 1045.195 812.5 1039.276 L 812.5 830.724 C 812.5 824.805 817.305 820 823.224 820 Z" style={{stroke:"none",fill:"#EBEBEB",strokeMiterlimit:"10"}}/>
            <path id="rightLeg" d="M 898.224 820 L 926.776 820 C 932.695 820 937.5 824.805 937.5 830.724 L 937.5 1039.276 C 937.5 1045.195 932.695 1050 926.776 1050 L 898.224 1050 C 892.305 1050 887.5 1045.195 887.5 1039.276 L 887.5 830.724 C 887.5 824.805 892.305 820 898.224 820 Z" style={{stroke:"none",fill:"#EBEBEB",strokeMiterlimit:"10"}}/>
            <g>
              <g>
                <path id="leftArm" d="M 786.333 648 L 786.333 648 C 799.947 648 811 664.579 811 685 L 811 878 L 774 878 L 774 666.5 C 774 656.29 779.526 648 786.333 648 Z" style={{stroke:"none",fill:"#2D679D",strokeMiterlimit:"10"}}/>
                <clipPath id="_clipPath_aWOTCenPLXiqiCGOLucxic75WLz5QnbU">
                  <path d="M 786.333 648 L 786.333 648 C 799.947 648 811 664.579 811 685 L 811 878 L 774 878 L 774 666.5 C 774 656.29 779.526 648 786.333 648 Z" style={{stroke:"none",fill:"#2D679D",strokeMiterlimit:"10"}}/>
                </clipPath>
                <g clip-path="url(#_clipPath_aWOTCenPLXiqiCGOLucxic75WLz5QnbU)">
                  <rect x="641" y="629" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                  <rect x="641" y="649" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                  <rect x="641" y="669" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                  <rect x="641" y="689" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                  <rect x="641" y="709" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                  <rect x="641" y="729" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                  <rect x="641" y="749" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                  <rect x="641" y="769" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                  <rect x="641" y="789" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                  <rect x="641" y="809" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                  <rect x="641" y="829" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                  <rect x="641" y="849" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                </g>
                <path d="M 820.5 625 L 927.5 625 C 957.027 625 981 648.973 981 678.5 L 981 818.5 C 981 848.027 957.027 872 927.5 872 L 820.5 872 C 790.973 872 767 848.027 767 818.5 L 767 678.5 C 767 648.973 790.973 625 820.5 625 Z" style={{stroke:"none",fill:"#2D679D",strokeMiterlimit:"10"}}/>
                <clipPath id="_clipPath_Daz0wmc64EdmYmixHuD80h2Su1qKAPey">
                  <path d="M 820.5 625 L 927.5 625 C 957.027 625 981 648.973 981 678.5 L 981 818.5 C 981 848.027 957.027 872 927.5 872 L 820.5 872 C 790.973 872 767 848.027 767 818.5 L 767 678.5 C 767 648.973 790.973 625 820.5 625 Z" style={{stroke:"none",fill:"#2D679D",strokeMiterlimit:"10"}}/>
                </clipPath>
                <g clip-path="url(#_clipPath_Daz0wmc64EdmYmixHuD80h2Su1qKAPey)">
                  <rect x="766" y="640" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                  <rect x="766" y="660" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                  <rect x="766" y="680" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                  <rect x="766" y="700" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                  <rect x="766" y="720" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                  <rect x="766" y="740" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                  <rect x="766" y="760" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                  <rect x="766" y="780" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                  <rect x="766" y="800" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                  <rect x="766" y="820" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                  <rect x="766" y="840" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                  <rect x="766" y="860" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                </g>
                <path id="rightArm" d="M 947.333 663 L 947.333 663 C 960.947 663 972 679.579 972 700 L 972 893 L 935 893 L 935 681.5 C 935 671.29 940.526 663 947.333 663 Z" style={{stroke:"none",fill:"#2D679D",strokeMiterlimit:"10"}}/>
                  <clipPath id="_clipPath_SL0PN0wrz6CR35ZtefieXpWFSmSYcc24">
                    <path d="M 947.333 663 L 947.333 663 C 960.947 663 972 679.579 972 700 L 972 893 L 935 893 L 935 681.5 C 935 671.29 940.526 663 947.333 663 Z" style={{stroke:"none",fill:"#2D679D",strokeMiterlimit:"10"}}/>
                  </clipPath>
                  <g clip-path="url(#_clipPath_SL0PN0wrz6CR35ZtefieXpWFSmSYcc24)">
                    <rect x="802" y="644" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                    <rect x="802" y="664" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                    <rect x="802" y="684" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                    <rect x="802" y="704" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                    <rect x="802" y="724" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                    <rect x="802" y="744" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                    <rect x="802" y="764" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                    <rect x="802" y="784" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                    <rect x="802" y="804" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                    <rect x="802" y="824" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                    <rect x="802" y="844" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                    <rect x="802" y="864" width="234" height="10" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
                  </g>
                </g>
              </g>
              <g>
                <path d="M 863.461 367 L 884.539 367 C 937.777 367 981 410.223 981 463.461 L 981 573.539 C 981 626.777 937.777 670 884.539 670 L 863.461 670 C 810.223 670 767 626.777 767 573.539 L 767 463.461 C 767 410.223 810.223 367 863.461 367 Z" style={{stroke:"none",fill:"#F4C8A5",strokeMiterlimit:"10"}}/>
                  <clipPath id="_clipPath_Kwgmi0FQRGZSRPCIVQ4rR1XwEyTTPfsL">
                    <rect x="793.587" y="544.666" width="92.63" height="57.995" transform="matrix(0.968,0.25,-0.25,0.968,170.25,-191.903)" fill="rgb(255,255,255)"/>
                  </clipPath>
                  <g clip-path="url(#_clipPath_Kwgmi0FQRGZSRPCIVQ4rR1XwEyTTPfsL)">
                    <path d=" M 810.588 550.281 C 815.593 530.912 835.731 519.341 855.531 524.458 C 875.33 529.574 887.34 549.453 882.335 568.822 C 877.33 588.191 857.191 599.762 837.392 594.645 C 817.593 589.529 805.582 569.649 810.588 550.281 Z " fill="rgb(0,0,0)"/>
                    <clipPath id="_clipPath_SIPP5qrEChkoj25ay8nFYD8CqOXmgWPa">
                      <path d=" M 810.588 550.281 C 815.593 530.912 835.731 519.341 855.531 524.458 C 875.33 529.574 887.34 549.453 882.335 568.822 C 877.33 588.191 857.191 599.762 837.392 594.645 C 817.593 589.529 805.582 569.649 810.588 550.281 Z " fill="rgb(0,0,0)"/>
                    </clipPath>
                    <g clip-path="url(#_clipPath_SIPP5qrEChkoj25ay8nFYD8CqOXmgWPa)">
                      <circle vector-effect="non-scaling-stroke" cx="849.0218688290715" cy="590.1500380624069" r="34.63573131538112" fill="rgb(240,106,106)"/>
                    </g>
                  </g>
                  <g>
                    <path d="M 828 420 L 828 420 C 835.727 420 842 426.273 842 434 L 842 479 C 842 486.727 835.727 493 828 493 L 828 493 C 820.273 493 814 486.727 814 479 L 814 434 C 814 426.273 820.273 420 828 420 Z" style={{stroke:"none",fill:"#EBEBEB",strokeMiterlimit:"10"}}/>
                    <clipPath id="_clipPath_JvwCVS715vdcBZBncknnhgVcg899jj01">
                      <path d="M 828 420 L 828 420 C 835.727 420 842 426.273 842 434 L 842 479 C 842 486.727 835.727 493 828 493 L 828 493 C 820.273 493 814 486.727 814 479 L 814 434 C 814 426.273 820.273 420 828 420 Z" style={{stroke:"none",fill:"#EBEBEB",strokeMiterlimit:"10"}}/>
                    </clipPath>
                    <g clip-path="url(#_clipPath_JvwCVS715vdcBZBncknnhgVcg899jj01)">
                      <path d="M 818 442 L 818 442 C 825.727 442 832 448.273 832 456 L 832 501 C 832 508.727 825.727 515 818 515 L 818 515 C 810.273 515 804 508.727 804 501 L 804 456 C 804 448.273 810.273 442 818 442 Z" style={{stroke:"none",fill:"#000000",strokeMiterlimit:"10"}}/>
                    </g>
                    <path d="M 878 445.5 L 878 445.5 C 885.727 445.5 892 451.773 892 459.5 L 892 504.5 C 892 512.227 885.727 518.5 878 518.5 L 878 518.5 C 870.273 518.5 864 512.227 864 504.5 L 864 459.5 C 864 451.773 870.273 445.5 878 445.5 Z" style={{stroke:"none",fill:"#EBEBEB",strokeMiterlimit:"10"}}/>
                    <clipPath id="_clipPath_nhWqcuwQcgJJtZg3DIxe1aZplI3Vdg0r">
                      <path d="M 878 445.5 L 878 445.5 C 885.727 445.5 892 451.773 892 459.5 L 892 504.5 C 892 512.227 885.727 518.5 878 518.5 L 878 518.5 C 870.273 518.5 864 512.227 864 504.5 L 864 459.5 C 864 451.773 870.273 445.5 878 445.5 Z" style={{stroke:"none",fill:"#EBEBEB",strokeMiterlimit:"10"}}/>
                    </clipPath><g clip-path="url(#_clipPath_nhWqcuwQcgJJtZg3DIxe1aZplI3Vdg0r)">
                    <path d="M 868 467.5 L 868 467.5 C 875.727 467.5 882 473.773 882 481.5 L 882 526.5 C 882 534.227 875.727 540.5 868 540.5 L 868 540.5 C 860.273 540.5 854 534.227 854 526.5 L 854 481.5 C 854 473.773 860.273 467.5 868 467.5 Z" style={{stroke:"none",fill:"#000000",strokeMiterlimit:"10"}}/>
                  </g>
                </g>
                <path d=" M 800 390 L 862.5 410 L 900 430 L 950 460 L 975 480 L 975 500 Q 986.75 546.25 987.5 500 C 988.25 453.75 986.688 485.359 987.5 470 Q 988.313 454.641 975 430 L 962.5 400 L 937.5 380 L 912.5 370 Q 856.5 365.5 837.5 370 C 818.5 374.5 803 390 800 390 Z " fill="rgb(88,41,0)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" strokeMiterlimit="3"/>
                <g>
                  <circle vector-effect="non-scaling-stroke" cx="916.5649496647346" cy="361.4612841869284" r="23.42797640758056" fill="rgb(225,69,69)"/>
                  <path d="M 839.151 333.08 L 989.798 402.792 C 1001.214 408.074 1006.193 421.63 1000.91 433.045 L 997.794 439.779 C 992.511 451.194 978.954 456.172 967.539 450.89 L 816.892 381.178 C 805.476 375.896 800.497 362.34 805.78 350.925 L 808.896 344.191 C 814.179 332.776 827.736 327.798 839.151 333.08 Z" style={{stroke:"none",fill:"#EBEBEB",strokeMiterlimit:"10"}}/>
                </g>
              </g>
            </g>
          </svg>
      </div>
    )
    }
}

export default Marin
