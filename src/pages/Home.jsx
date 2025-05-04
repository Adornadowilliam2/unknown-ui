import React, { useEffect, useState } from 'react';
import icon2 from '../assets/icons/2.png';
import icon3 from '../assets/icons/3.png';
import icon4 from '../assets/icons/4.png';
import icon5 from '../assets/icons/5.png';
import icon6 from '../assets/icons/6.png';
import icon7 from '../assets/icons/7.png';
import icon8 from '../assets/icons/8.png';
import icon9 from '../assets/icons/9.png';
import icon10 from '../assets/icons/10.png';
import icon11 from '../assets/icons/11.png';
import icon12 from '../assets/icons/12.png';
import icon13 from '../assets/icons/13.png';
import icon14 from '../assets/icons/14.png';
import icon15 from '../assets/icons/15.png';
import icon16 from '../assets/icons/16.png';
import icon17 from '../assets/icons/17.png';
import icon18 from '../assets/icons/18.png';
import icon19 from '../assets/icons/19.png';
import icon20 from '../assets/icons/20.png';
import icon21 from '../assets/icons/21.png';
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material"
import activation_icon from '../assets/icons/activation_icons/activation_msg.png';
import key_icon from '../assets/icons/activation_icons/key_icon.png';

function generateSerial() {
    const part1 = randomString(9);
    const part2 = randomString(5);
    return `${part1}-${part2}`;
}

function randomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}


export default function Home() {
    const [openActivation, setOpenActivation] = useState(false);




    const [serial, setSerial] = useState('');

    useEffect(() => {
        setSerial(generateSerial());
    }, []);

    const [passcode, setPasscode] = useState(false)

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ border: '1px solid black', borderRadius: 10, outline: '2px solid lightblue' }}>
                <div style={{ backgroundColor: 'lightblue', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 5 }}>
                    Ahead of Point of Sale
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }} id='modules'>
                    <div onClick={() => window.location.replace('about:blank')}
                    >
                        <img src={icon2} alt="shutdown" style={{ cursor: 'pointer' }} />
                    </div>

                    <div><img src={icon3} alt="sale entry" onClick={() => setOpenActivation(true)} /></div>
                    <div><img src={icon4} alt="sales order" /></div>
                    <div><img src={icon5} alt="sales reading" onClick={() => setPasscode(true)} /></div>
                    <div><img src={icon6} alt="plu maintenance" onClick={() => setPasscode(true)} /></div>
                    <div onClick={() => setPasscode(true)}><img src={icon7} alt="file maintenance" /></div>
                    <div onClick={() => setPasscode(true)}><img src={icon8} alt="sales inquiry" /></div>
                    <div onClick={() => setPasscode(true)}><img src={icon9} alt="reports" /></div>
                    <div onClick={() => setPasscode(true)}><img src={icon10} alt="admin mode" /></div>
                    <div onClick={() => setPasscode(true)}><img src={icon11} alt="inventory" /></div>
                    <div onClick={() => setPasscode(true)}><img src={icon12} alt="system mode" /></div>
                    <div onClick={() => setPasscode(true)}><img src={icon13} alt="table reservation" /></div>
                    <div onClick={() => setPasscode(true)}><img src={icon14} alt="tender declaration" /></div>
                    <div onClick={() => setPasscode(true)}><img src={icon15} alt="toggle next counter" /></div>
                    <div onClick={() => setPasscode(true)}><img src={icon16} alt="time clock" /></div>
                    <div onClick={() => setPasscode(true)}><img src={icon17} alt="system utilities" /></div>
                    <div onClick={() => setPasscode(true)}><img src={icon18} alt="table management" /></div>
                    <div onClick={() => setPasscode(true)}><img src={icon19} alt="order view" /></div>
                    <div onClick={() => setPasscode(true)}><img src={icon20} alt="advanced report" /></div>
                    <div onClick={() => setPasscode(true)}><img src={icon21} alt="database maintenance" /></div>

                </div>
                <div style={{ padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} id="footer">
                    <div>Oneclicktech Corp. - Ahead Point Of Sale SQL Standard Edition</div>
                    <div>On-Line</div>
                    <div>5/4/2025</div>
                </div>
            </div>
            <Dialog open={!!openActivation}>
                <DialogTitle>Activation Key Form</DialogTitle>
                <IconButton style={{ position: 'absolute', right: "10px", top: "10px" }} onClick={() => setOpenActivation(false)}>
                    X
                </IconButton>
                <DialogContent
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                >
                    <div
                        style={{
                            border: '1px solid black',
                            outline: '2px solid lightblue',
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: 10
                        }}
                    >
                        <div>
                            <img src={key_icon} alt="" style={{ width: '150px' }} />
                        </div>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateRows: '1fr 1fr',
                                padding: '10px'
                            }}
                        >
                            <div>
                                <img src={activation_icon} alt="" style={{ width: '300px' }} />
                            </div>
                            <div>
                                <h1 style={{ color: 'crimson', fontSize: 'medium', textAlign: 'center' }}>
                                    FOODPOS SQL
                                </h1>
                                <div>
                                    <h2 style={{ textDecoration: 'underline', marginTop: '2px' }}>
                                        Oneclick Corp.
                                    </h2>
                                </div>
                                <div id="form-container">
                                    <label htmlFor="serial">Serial Number:</label>
                                    <input type="text" id="serial" value={serial} readOnly />
                                </div>
                                <div id="form-container">
                                    <label htmlFor="activation">Activation Key:</label>
                                    <input type="text" id="activation" />
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            <Dialog open={!!passcode} >
                <DialogContent>
                    <div
                        style={{
                            display: 'flex',

                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <div
                            style={{
                                border: '1px solid black',
                                outline: '2px solid lightblue',
                                borderRadius: '10px',
                                width: '100%',

                                boxSizing: 'border-box'
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: 'lightblue',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    textAlign: 'center',
                                    marginBottom: '10px'
                                }}
                            >
                                Tender Declaration Access Control
                            </div>

                            <h1 style={{ textAlign: 'center' }}>Enter Passcode</h1>
                            <input
                                type="text"
                                style={{
                                    display: 'block',
                                    margin: '10px auto',
                                    padding: '8px',
                                    width: '80%',
                                    fontSize: '1.2rem',
                                    textAlign: 'center'
                                }}
                            />

                            <div
                                style={{
                                    padding: '10px',
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(4, 1fr)',
                                    gap: '10px'
                                }}
                            >
                                <button>1</button>
                                <button>2</button>
                                <button>3</button>
                                <button onClick={() => setPasscode(false)}>Cancel</button>
                                <button>4</button>
                                <button>5</button>
                                <button>6</button>
                                <button>Backspace</button>
                                <button>7</button>
                                <button>8</button>
                                <button>9</button>
                                <button>Clear</button>
                                <button>0</button>
                                <button>00</button>
                                <button>.</button>
                                <button>Ok</button>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
