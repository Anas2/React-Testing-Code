import { Box, Input, TextField, Button, Grid } from "@mui/material";
import Navbar from "../componants/Navbar";
import Header from "../componants/Header";
import Slider from "../componants/Slider";
import { useEffect, useState } from "react";
import './screens.css';
import { Image } from "@mui/icons-material";

import tEnglish from "../locales/en/translation.json";
import tUrdu from "../locales/ur/translation.json";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: tEnglish
            },
            ur: {
                translation: tUrdu
            }
        },
        lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });

// import Button from "../componants/Button";
function Home() {

    const { t } = useTranslation();

    const [model, setModel] = useState({});


    let submitBtn = () => {
        console.log(model)
    }
    function changeLang(lang) {
        // alert(lang)
        console.log("hellllooooo");
        i18n.changeLanguage(lang)
        localStorage.setItem('lang', lang)
    }


    useEffect(() => {

        let key = localStorage.getItem('lang');
        i18n.changeLanguage(key);


    }, [])

    return (
        <Box>
            {/* <Header/> */}
            <Navbar />
            <Slider />
            {/* <Box><Button /></Box> */}
            <h1 className="head">Home</h1>
            <h1>{t('welcome_react_app')} js MultiLanguage Tutorials</h1>
            <h1>{t('website_name')}</h1>
            <Box sx={{ marginTop: 4 }}><Button variant="contained" color="secondary" onClick={() => { changeLang('en') }}>English</Button> </Box>
            <Box sx={{ marginTop: 4 }}><Button variant="contained" color="secondary" onClick={() => { changeLang('ur') }}>Urdu</Button> </Box>

            <Box className="main" >
                <Box>
                    <img
                        src='https://images.olx.com.pk/thumbnails/333941957-240x180.webp"'
                    />
                </Box>
            </Box>

            <Box sx={{ marginTop: 10, /*display: "flex", flexDirection: "row", border: "1px solid"*/ }}>
                <Box sx={{ /*border: "1px solid green",*/ flex: 1, padding: 10 }}>
                    <Box sx={{ border: "1px solid green", textAlign: "center", padding: 10, marginX: 15 }}>
                        <Box>
                            <TextField
                                // value={value}
                                variant="standard"
                                label="first name"
                                onChange={(e) => { setModel({ ...model, firstname: e.target.value }) }}
                            />
                        </Box>
                        <Box>
                            <TextField
                                // value={value}
                                variant="standard"
                                label="last name"
                                onChange={(e) => { setModel({ ...model, lastName: e.target.value }) }}

                            />
                        </Box>
                        <Box>
                            <TextField
                                // value={value}
                                variant="standard"
                                label="email"
                                onChange={(e) => { setModel({ ...model, email: e.target.value }) }}

                            />
                        </Box>
                        <Box>
                            <TextField
                                // value={value}
                                variant="standard"
                                label="password"
                                onChange={(e) => { setModel({ ...model, password: e.target.value }) }}

                            />
                        </Box>

                        <Box sx={{ marginTop: 4 }}><Button variant="contained" color="secondary" onClick={submitBtn}>Submit</Button> </Box>
                    </Box>
                </Box>
                {/* <Box sx={{ border: "1px solid green", flex: 1, textAlign: "center" }}><h1>2</h1></Box> */}
            </Box>
        </Box>


    )
}


export default Home;