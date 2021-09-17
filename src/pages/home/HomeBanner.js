import React from 'react';
import {Link, NavLink} from "react-router-dom";
import DisplayNavbar from "../navbar/DisplayNavbar";

const HomeBanner = () => {
    return (
        <div className="home-banner ">

            {/*<img className="backMain" src="/images/backMain.png" alt=""/>*/}

            <div className="home-navbar">

                <div className="row">

                    <div className="col-md-6">
                        <NavLink to="/"><img src="/images/icon/citynet.png" alt=""/></NavLink>
                    </div>
                    <div className="col-md-6">
                      <div className="menus">
                          <a href="#" >О нас</a>
                          <a href="#!">Интернет</a>
                          <a href="#!">Продукты</a>
                          <a href="#!">Партнеры</a>
                      </div>
                    </div>
                </div>
            </div>
            <DisplayNavbar/>

            <div className="run-img">
                <svg width="1440" height="838" viewBox="0 0 1440 838" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-300.352 11.556C44.6985 -89.2252 -87.5117 561.821 149.722 681.674C437.605 827.109 521.959 98.5379 666.273 270.486C853.974 494.065 864.03 470.498 1191.39 333.901C1518.75 197.304 1753.93 519.338 1753.93 519.338" stroke="url(#paint0_radial)" stroke-width="2" stroke-miterlimit="10"/>
                    <path d="M-300.912 41.0152C54.0072 -46.5869 -64.4234 544.301 167.969 667.564C459.948 822.457 544.302 103.345 690.106 274.052C877.062 493.755 874.828 494.996 1200.88 355.763C1528.24 215.599 1752.07 525.54 1752.07 525.54" stroke="url(#paint1_radial)" stroke-width="1.9405" stroke-miterlimit="10"/>
                    <path d="M-301.654 70.3193C62.948 -4.1038 -41.7029 526.936 186.034 653.455C482.297 817.961 566.837 108.151 713.758 277.618C899.969 493.6 885.631 519.648 1210.38 377.624C1537.74 234.05 1750.03 531.742 1750.03 531.742" stroke="url(#paint2_radial)" stroke-width="1.8809" stroke-miterlimit="10"/>
                    <path d="M-302.213 99.7783C72.0725 38.6894 -18.985 509.88 204.283 639.345C504.642 813.464 589.741 112.802 737.593 281.029C923.618 492.825 896.618 543.991 1220.07 399.486C1547.43 252.346 1748.35 537.944 1748.35 537.944" stroke="url(#paint3_radial)" stroke-width="1.8214" stroke-miterlimit="10"/>
                    <path d="M-302.959 129.082C81.1955 81.1723 3.54528 492.98 222.344 625.236C526.8 809.278 612.457 117.454 761.426 284.595C946.707 492.515 907.602 568.643 1229.56 421.348C1556.92 270.641 1746.49 544.301 1746.49 544.301" stroke="url(#paint4_radial)" stroke-width="1.7619" stroke-miterlimit="10"/>
                    <path d="M-303.518 158.542C90.32 123.811 26.077 476.235 240.407 611.127C549.145 805.247 634.989 122.26 785.075 288.162C969.797 492.205 918.403 593.141 1239.06 443.21C1566.42 289.092 1744.44 550.503 1744.44 550.503" stroke="url(#paint5_radial)" stroke-width="1.7024" stroke-miterlimit="10"/>
                    <path d="M-304.076 187.845C99.4443 166.294 48.6086 459.489 258.655 596.862C571.118 801.37 657.52 127.066 808.911 291.727C993.074 491.894 929.389 617.638 1248.74 465.226C1576.1 307.542 1742.76 556.86 1742.76 556.86" stroke="url(#paint6_radial)" stroke-width="1.6429" stroke-miterlimit="10"/>
                    <path d="M-304.822 217.305C108.381 208.932 70.9527 443.055 276.717 582.908C593.09 797.649 680.051 131.873 832.558 295.294C1015.98 491.585 940.188 642.291 1258.05 487.088C1585.41 325.838 1740.71 563.062 1740.71 563.062" stroke="url(#paint7_radial)" stroke-width="1.5833" stroke-miterlimit="10"/>
                    <path d="M-305.379 246.609C117.508 251.57 93.3001 426.62 294.967 568.644C615.065 794.083 702.584 136.68 856.395 298.705C1039.07 491.275 951.549 667.254 1267.74 508.795C1595.47 344.599 1739.04 569.109 1739.04 569.109" stroke="url(#paint8_radial)" stroke-width="1.5238" stroke-miterlimit="10"/>
                    <path d="M-306.123 276.068C126.633 294.208 115.274 410.339 313.03 554.534C636.852 790.672 725.117 141.486 880.231 302.271C1062.16 490.964 962.536 691.751 1277.23 530.812C1604.97 363.205 1736.99 575.465 1736.99 575.465" stroke="url(#paint9_radial)" stroke-width="1.4643" stroke-miterlimit="10"/>
                    <path d="M-306.682 305.372C135.757 336.692 137.433 394.059 331.279 540.425C658.453 787.416 747.648 146.448 903.88 305.837C1085.25 490.654 973.337 716.249 1286.73 552.673C1614.46 381.5 1735.13 581.668 1735.13 581.668" stroke="url(#paint10_radial)" stroke-width="1.4048" stroke-miterlimit="10"/>
                    <path d="M-307.428 334.831C144.694 379.33 159.218 378.09 349.341 526.471C679.68 784.471 769.992 151.254 927.527 309.403C1107.97 490.499 984.136 740.902 1296.23 574.535C1623.96 399.951 1733.26 587.87 1733.26 587.87" stroke="url(#paint11_radial)" stroke-width="1.3452" stroke-miterlimit="10"/>
                    <path d="M-307.986 364.135C153.818 421.813 181.191 361.965 367.589 512.206C701.094 781.369 792.524 156.061 951.363 312.814C1131.24 490.189 995.122 765.4 1305.91 596.397C1633.64 418.247 1731.4 594.071 1731.4 594.071" stroke="url(#paint12_radial)" stroke-width="1.2857" stroke-miterlimit="10"/>
                    <path d="M-308.543 393.594C163.131 464.606 203.166 345.995 385.84 498.097C722.324 778.424 815.058 160.867 975.386 316.38C1154.34 489.879 1006.3 789.742 1315.59 618.259C1643.14 436.543 1729.73 600.273 1729.73 600.273" stroke="url(#paint13_radial)" stroke-width="1.2262" stroke-miterlimit="10"/>
                    <path d="M-309.289 422.899C172.068 507.09 224.766 330.025 403.901 483.987C743.179 775.633 837.402 165.829 999.033 319.947C1177.05 489.724 1016.72 813.775 1325.09 640.121C1652.26 454.373 1727.87 606.475 1727.87 606.475" stroke="url(#paint14_radial)" stroke-width="1.1667" stroke-miterlimit="10"/>
                    <path d="M-309.848 452.358C181.192 549.728 246.366 314.21 421.964 469.878C763.848 773.152 859.747 170.791 1022.68 323.513C1199.96 489.569 1027.52 838.427 1334.4 661.983C1661.57 472.669 1725.63 612.832 1725.63 612.832" stroke="url(#paint15_radial)" stroke-width="1.1071" stroke-miterlimit="10"/>
                    <path d="M-310.594 481.662C190.129 592.211 267.779 298.24 440.025 455.769C784.144 770.516 881.905 175.597 1046.33 326.924C1222.67 489.259 1038.14 862.77 1343.9 683.844C1671.07 491.12 1723.77 619.034 1723.77 619.034" stroke="url(#paint16_radial)" stroke-width="1.0476" stroke-miterlimit="10"/>
                    <path d="M-311.152 511.121C199.44 634.849 289.38 282.425 458.274 441.659C804.628 768.19 904.437 180.558 1070.17 330.49C1245.58 489.104 1049.12 887.422 1353.58 705.706C1680.75 509.415 1722.09 625.236 1722.09 625.236" stroke="url(#paint17_radial)" stroke-width="0.9881" stroke-miterlimit="10"/>
                    <path d="M-311.711 540.58C208.564 677.643 310.981 266.765 476.523 427.705C824.738 766.02 926.782 185.675 1094 334.211C1268.48 489.259 1060.11 912.075 1363.08 727.723C1690.25 527.866 1720.23 631.594 1720.23 631.594" stroke="url(#paint18_radial)" stroke-width="0.9286" stroke-miterlimit="10"/>
                    <path d="M-312.457 569.884C217.501 720.125 332.208 250.795 494.584 413.44C844.476 763.694 948.94 190.481 1117.65 337.622C1291.2 488.949 1070.91 936.417 1372.57 749.584C1699.56 546.316 1718.18 637.795 1718.18 637.795" stroke="url(#paint19_radial)" stroke-width="0.869" stroke-miterlimit="10"/>
                    <path d="M-313.014 599.343C226.628 762.608 353.438 235.135 512.835 399.331C864.216 761.523 971.102 195.753 1141.67 341.188C1314.1 489.104 1082.08 961.07 1382.44 771.446C1709.43 564.612 1716.69 643.997 1716.69 643.997" stroke="url(#paint20_radial)" stroke-width="0.8095" stroke-miterlimit="10"/>
                    <path d="M-313.758 628.647C235.753 805.247 374.48 219.32 530.898 385.222C883.583 759.508 993.634 200.56 1165.32 344.599C1337.01 488.639 1092.88 985.568 1391.75 793.308C1718.74 583.063 1714.65 650.199 1714.65 650.199" stroke="url(#paint21_radial)" stroke-width="0.75" stroke-miterlimit="10"/>
                    <defs>
                        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(726.792 351.001) rotate(90) scale(350.001 1027.14)">
                            <stop stop-color="#0070A2"/>
                            <stop offset="0.760417" stop-color="#0070A2" stop-opacity="0.26"/>
                            <stop offset="1" stop-color="#0070A2" stop-opacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(725.579 360.888) rotate(90) scale(328.693 1026.49)">
                            <stop stop-color="#0070A2"/>
                            <stop offset="0.760417" stop-color="#0070A2" stop-opacity="0.26"/>
                            <stop offset="1" stop-color="#0070A2" stop-opacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(724.185 370.795) rotate(90) scale(307.591 1025.84)">
                            <stop stop-color="#0070A2"/>
                            <stop offset="0.760417" stop-color="#0070A2" stop-opacity="0.26"/>
                            <stop offset="1" stop-color="#0070A2" stop-opacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(723.068 380.861) rotate(90) scale(286.519 1025.28)">
                            <stop stop-color="#0070A2"/>
                            <stop offset="0.760417" stop-color="#0070A2" stop-opacity="0.26"/>
                            <stop offset="1" stop-color="#0070A2" stop-opacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint4_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(721.763 390.939) rotate(90) scale(265.714 1024.72)">
                            <stop stop-color="#0070A2"/>
                            <stop offset="0.760417" stop-color="#0070A2" stop-opacity="0.26"/>
                            <stop offset="1" stop-color="#0070A2" stop-opacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint5_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(720.46 401.165) rotate(90) scale(245.018 1023.98)">
                            <stop stop-color="#0070A2"/>
                            <stop offset="0.760417" stop-color="#0070A2" stop-opacity="0.26"/>
                            <stop offset="1" stop-color="#0070A2" stop-opacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint6_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(719.343 411.293) rotate(90) scale(224.574 1023.42)">
                            <stop stop-color="#0070A2"/>
                            <stop offset="0.760417" stop-color="#0070A2" stop-opacity="0.26"/>
                            <stop offset="1" stop-color="#0070A2" stop-opacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint7_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(717.945 421.553) rotate(90) scale(204.467 1022.77)">
                            <stop stop-color="#0070A2"/>
                            <stop offset="0.760417" stop-color="#0070A2" stop-opacity="0.26"/>
                            <stop offset="1" stop-color="#0070A2" stop-opacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint8_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(716.83 431.428) rotate(90) scale(184.819 1022.21)">
                            <stop stop-color="#0070A2"/>
                            <stop offset="0.760417" stop-color="#0070A2" stop-opacity="0.26"/>
                            <stop offset="1" stop-color="#0070A2" stop-opacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint9_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(715.434 441.458) rotate(90) scale(165.39 1021.56)">
                            <stop stop-color="#0070A2"/>
                            <stop offset="0.760417" stop-color="#0070A2" stop-opacity="0.26"/>
                            <stop offset="1" stop-color="#0070A2" stop-opacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint10_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(714.223 444.588) rotate(90) scale(164.561 1020.91)">
                            <stop stop-color="#0070A2"/>
                            <stop offset="0.760417" stop-color="#0070A2" stop-opacity="0.26"/>
                            <stop offset="1" stop-color="#0070A2" stop-opacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint11_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(712.919 456.389) rotate(90) scale(172.712 1020.35)">
                            <stop stop-color="#0070A2"/>
                            <stop offset="0.760417" stop-color="#0070A2" stop-opacity="0.26"/>
                            <stop offset="1" stop-color="#0070A2" stop-opacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint12_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(711.708 468.211) rotate(90) scale(181 1019.69)">
                            <stop stop-color="#0070A2"/>
                            <stop offset="0.760417" stop-color="#0070A2" stop-opacity="0.26"/>
                            <stop offset="1" stop-color="#0070A2" stop-opacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint13_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(710.593 480.164) rotate(90) scale(189.306 1019.14)">
                            <stop stop-color="#0070A2"/>
                            <stop offset="0.760417" stop-color="#0070A2" stop-opacity="0.26"/>
                            <stop offset="1" stop-color="#0070A2" stop-opacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint14_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(709.288 492.178) rotate(90) scale(197.627 1018.58)">
                            <stop stop-color="#0070A2"/>
                            <stop offset="0.760417" stop-color="#0070A2" stop-opacity="0.26"/>
                            <stop offset="1" stop-color="#0070A2" stop-opacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint15_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(707.892 504.394) rotate(90) scale(206.14 1017.74)">
                            <stop stop-color="#0070A2"/>
                            <stop offset="0.760417" stop-color="#0070A2" stop-opacity="0.26"/>
                            <stop offset="1" stop-color="#0070A2" stop-opacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint16_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(706.587 516.532) rotate(90) scale(214.73 1017.18)">
                            <stop stop-color="#0070A2"/>
                            <stop offset="0.760417" stop-color="#0070A2" stop-opacity="0.26"/>
                            <stop offset="1" stop-color="#0070A2" stop-opacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint17_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(705.47 528.871) rotate(90) scale(223.363 1016.62)">
                            <stop stop-color="#0070A2"/>
                            <stop offset="0.760417" stop-color="#0070A2" stop-opacity="0.26"/>
                            <stop offset="1" stop-color="#0070A2" stop-opacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint18_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(704.259 541.393) rotate(90) scale(232.024 1015.97)">
                            <stop stop-color="#0070A2"/>
                            <stop offset="0.760417" stop-color="#0070A2" stop-opacity="0.26"/>
                            <stop offset="1" stop-color="#0070A2" stop-opacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint19_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(702.862 553.688) rotate(90) scale(240.764 1015.32)">
                            <stop stop-color="#0070A2"/>
                            <stop offset="0.760417" stop-color="#0070A2" stop-opacity="0.26"/>
                            <stop offset="1" stop-color="#0070A2" stop-opacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint20_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(701.84 566.213) rotate(90) scale(249.494 1014.85)">
                            <stop stop-color="#0070A2"/>
                            <stop offset="0.760417" stop-color="#0070A2" stop-opacity="0.26"/>
                            <stop offset="1" stop-color="#0070A2" stop-opacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint21_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(700.445 578.61) rotate(90) scale(258.325 1014.2)">
                            <stop stop-color="#0070A2"/>
                            <stop offset="0.760417" stop-color="#0070A2" stop-opacity="0.26"/>
                            <stop offset="1" stop-color="#0070A2" stop-opacity="0"/>
                        </radialGradient>
                    </defs>
                </svg>

            </div>


            <div className="chooses d-flex">
                <Link className="smallChild" to="/Installation">
                    <span>
                        Монтаж
                    </span>
                </Link>
                <Link to="/main-iptv-proekt" className="mediumChild">
                    <span>
                         Проектирование
                    </span>
                </Link>
                <Link to="/home-internet" className="bigChild">
                    <span>
                        Интернет
                    </span>
                </Link>
                <Link to="/itequipment" className="mediumChild">
                    <span>
                        IT оборудование
                    </span>
                </Link>
                <Link className="smallChild" to="/ItDevelopment">
                    <span>
                        IT разработка
                    </span>
                </Link>

            </div>

            <div className="contact-footer-home">
                <div className="sot-set-list">
                    <a href="https://www.instagram.com/citynet.uz/" target="_blank" ><img src="/images/icon/instagramlogo1.png" alt=""/></a>
                    <a href="https://t.me/citynet_uzb" target="_blank"><img src="/images/icon/telegram1.png" alt=""/></a>
                    <a href="https://www.facebook.com/CITYNET.uz/" target="_blank"><img src="/images/icon/facebook1.png" alt=""/></a>
                </div>
                <div className="mouse">
                    <a href="#company" ><span>
                        О Компании
                    </span>

                      </a>
                    <a href="#company"  >  <img src="/images/icon/mouse.png" alt=""/></a>

                </div>
                <div className="sv">
                    <span>
                        Связить с нами
                    </span>
                    <NavLink to="/contact"  >   <img src="/images/icon/sv.png" alt=""/></NavLink>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;