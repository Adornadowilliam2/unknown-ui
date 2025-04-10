import React from 'react'
import { Button, Box } from '@mui/material'

import { OfflineBolt, Person, House as HouseIcon, FileUpload, Folder, AccountBalance, Storage, Lock, LockClock, Book, BookRounded, BookOnline, Money, DoNotDisturbOnTotalSilence, Close, DataExploration } from '@mui/icons-material';
export default function Home() {
    return (
        <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{
                border: "1px solid black", display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: "350px", flexWrap: "wrap", padding: "10px", gap: "10px", margin: "auto", borderRadius:"10px"
            }}>
                <Button variant="contained" color="info">
                    <HouseIcon />
                </Button>
                <Button variant="contained" color="info">
                    <Person />
                </Button>
                <Button variant="contained" color="info">
                    <OfflineBolt />
                </Button>
                <Button variant="contained" color="info">
                    <FileUpload />
                </Button>
                <Button variant="contained" color="info">
                    <Folder />
                </Button>
                <Button variant="contained" color="info">
                    <AccountBalance />
                </Button>
                <Button variant="contained" color="info">
                    <Storage />
                </Button>
                <Button variant="contained" color="info">
                    <Lock />
                </Button>
                <Button variant="contained" color="info">
                    <LockClock />
                </Button>
                <Button variant="contained" color="info">
                    <Book />
                </Button>
                <Button variant="contained" color="info">
                    <BookOnline />
                </Button>
                <Button variant="contained" color="info">
                    <Money />
                </Button>
                <Button variant="contained" color="info">
                    <HouseIcon />
                </Button>
                <Button variant="contained" color="info">
                    <DoNotDisturbOnTotalSilence />
                </Button>
                <Button variant="contained" color="info">
                    <Close />
                </Button>
                <Button variant="contained" color="info">
                    <DataExploration />
                </Button>


            </Box>
        </div>
    )
}
