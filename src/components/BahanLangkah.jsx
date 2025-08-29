import React, { useState } from 'react'
import { Box, Grid, Typography, Button, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, IconButton } from '@mui/material'
import DeleteIcon from "@mui/icons-material/Delete";

const BahanLangkah = () => {
    const [openLangkah, setOpenLangkah] = useState(false);
    const [steps, setSteps] = useState([]);
    const [nomer, setNomer] = useState("");
    const [deskripsi, setDeskripsi] = useState("");

    const handleClickOpenLangkah = () => setOpenLangkah(true);
    const handleCloseLangkah = () => {
        setOpenLangkah(false);
        setNomer("");
        setDeskripsi("");
    };
    const handleAddStep = () => {
        if (nomer && deskripsi) {
            setSteps([...steps, { nomer, deskripsi }]);
            handleCloseLangkah();
        }
    };
    const handleDeleteStep = (index) => {
        setSteps(steps.filter((_, i) => i !== index));
    };



    const [openBahan, setOpenBahan] = useState(false);
    const [bahanList, setBahanList] = useState([]);
    const [namaBahan, setNamaBahan] = useState("");
    const [jumlahBahan, setJumlahBahan] = useState("");

    const handleClickOpenBahan = () => setOpenBahan(true);
    const handleCloseBahan = () => {
        setOpenBahan(false);
        setNamaBahan("");
        setJumlahBahan("");
    };
    const handleAddBahan = () => {
        if (namaBahan && jumlahBahan) {
            setBahanList([...bahanList, { namaBahan, jumlahBahan }]);
            handleCloseBahan();
        }
    };
    const handleDeleteBahan = (index) => {
        setBahanList(bahanList.filter((_, i) => i !== index));
    };



    return (
        <>
            <Grid container
                direction={{ xs: "column", md: "row" }}
                sx={{ justifyContent: "space-around", marginTop: { md: "15%" }, gap: 2 }}
            >
                {/* LANGKAH */}
                <Box sx={{ width: { xs: "100%", md: "49%" }, padding: "1%" }}>
                    <Typography sx={{
                        textAlign: "center",
                        border: "5px solid",
                        borderRadius: "25px",
                        borderColor: "#D8E9A8",
                        fontWeight: "800",
                        padding: "1%",
                    }}>
                        LANGKAH LANGKAH MEMASAK
                    </Typography>

                    <Box sx={{
                        width: "100%",
                        minHeight: "50vh",
                        borderRadius: "15px",
                        backgroundColor: "#D8E9A8",
                        boxShadow: "0 10px 10px 0 #00000050",
                        padding: "1%",
                        marginTop: "4%",
                        position: "relative",
                    }}>
                        {steps.length === 0 ? (
                            <Typography sx={{
                                textAlign: "center",
                                mt: 2,
                                fontWeight: 600,
                                color: "#white",
                                backgroundColor: "#12372A",
                                paddingY: "1%",
                                borderRadius: "10px",
                            }}>
                                Belum ada langkah memasak yang ditambahkan
                            </Typography>
                        ) : (
                            steps.map((step, index) => (
                                <Box key={index} sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    p: 1, mb: 1,
                                    bgcolor: "#12372A",
                                    borderRadius: "10px"
                                }}>
                                    <Typography>{step.nomer}. {step.deskripsi}</Typography>
                                    <Box>
                                        <IconButton color="error" onClick={() => handleDeleteStep(index)}><DeleteIcon /></IconButton>
                                    </Box>
                                </Box>
                            ))
                        )}
                        <Button variant='contained'
                            onClick={handleClickOpenLangkah}
                            sx={{
                                position: "absolute",
                                bottom: "4%", right: "3%",
                                backgroundColor: "#12372A",
                                color: "#D8E9A8",
                                borderRadius: "15px",
                                fontWeight: "600",
                            }}
                        >
                            Tambah Langkah
                        </Button>
                    </Box>
                </Box>
                <Dialog open={openLangkah} onClose={handleCloseLangkah}>
                    <DialogTitle
                        sx={{
                            backgroundColor: "#12372A",
                            color: "#D8E9A8",
                            textAlign: "center",
                            fontWeight: "800",
                        }}>
                        Tambah Langkah
                    </DialogTitle>
                    <DialogContent
                        sx={{
                            backgroundColor: "#12372A",
                            width: { xs: "300px", md: "500px" },
                        }}
                    >
                        <DialogContentText
                            sx={{
                                color: "#1E5128",
                                mb: 1,
                                borderRadius: "10px",
                                textAlign: "center",
                                backgroundColor: "#D8E9A8",
                                fontWeight: "600",
                                padding: "1%",
                            }}
                        >Nomer Urut Langkah Pembuatan</DialogContentText>
                        <TextField value={nomer} placeholder='Masukan Nomer Urut Langkah Pembuatan' onChange={(e) => setNomer(e.target.value)} type="number" fullWidth
                            sx={{
                                mb: 2,
                                input: { color: "white" },
                                "& .MuiOutlinedInput-root": {
                                    border: "3px solid",
                                    borderColor: "#D8E9A8",
                                    borderRadius: "20px",
                                    "& fieldset": { borderColor: "transparent", },
                                    "&:hover fieldset": { borderColor: "transparent", },
                                    "&.Mui-focused fieldset": { borderColor: "transparent", },
                                    "& .MuiInputLabel-root": { color: "white", },
                                    "& .MuiInputBase-input": { color: "white", },
                                },
                            }}
                        />
                        <DialogContentText
                            sx={{
                                color: "#1E5128",
                                mb: 1,
                                borderRadius: "10px",
                                textAlign: "center",
                                backgroundColor: "#D8E9A8",
                                fontWeight: "600",
                                padding: "1%",
                            }}
                        >Deskripsi Langakah Pembuatan</DialogContentText>
                        <TextField value={deskripsi} placeholder='Masukan Deskripsi Langkah Pembuatan' onChange={(e) => setDeskripsi(e.target.value)} fullWidth
                            sx={{
                                mb: 2,
                                input: { color: "white" },
                                "& .MuiOutlinedInput-root": {
                                    border: "3px solid",
                                    borderColor: "#D8E9A8",
                                    borderRadius: "20px",
                                    "& fieldset": { borderColor: "transparent", },
                                    "&:hover fieldset": { borderColor: "transparent", },
                                    "&.Mui-focused fieldset": { borderColor: "transparent", },
                                    "& .MuiInputLabel-root": { color: "white", },
                                    "& .MuiInputBase-input": { color: "white", },
                                },
                            }}
                        />
                        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                            <Button onClick={handleCloseLangkah}
                                sx={{
                                    backgroundColor: "#D8E9A8",
                                    color: "#1E5128",
                                    fontWeight: "900",
                                    paddingX: "6%",
                                    borderRadius: "10px",
                                }}
                            >
                                Cancel
                            </Button>
                            <Button onClick={handleAddStep}
                                sx={{
                                    backgroundColor: "#D8E9A8",
                                    color: "#1E5128",
                                    fontWeight: "900",
                                    paddingX: "6%",
                                    borderRadius: "10px",
                                }}
                            >
                                Tambah
                            </Button>
                        </Box>
                    </DialogContent>
                </Dialog>


                {/* BAHAN */}
                <Box sx={{ width: { xs: "100%", md: "49%" }, padding: "1%" }}>
                    <Typography sx={{
                        textAlign: "center",
                        border: "5px solid",
                        borderRadius: "25px",
                        borderColor: "#D8E9A8",
                        fontWeight: "800",
                        padding: "1%",
                    }}>
                        BAHAN BAHAN MASAKAN
                    </Typography>
                    <Box sx={{
                        width: "100%",
                        minHeight: "50vh",
                        borderRadius: "15px",
                        backgroundColor: "#D8E9A8",
                        boxShadow: "0 10px 10px 0 #00000050",
                        padding: "1%",
                        marginTop: "4%",
                        position: "relative",
                    }}>
                        {bahanList.length === 0 ? (
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    mt: 2,
                                    fontWeight: 600,
                                    color: "#white",
                                    backgroundColor: "#12372A",
                                    paddingY: "1%",
                                    borderRadius: "10px",
                                }}
                            >
                                Belum ada bahan masakan yang ditambahkan
                            </Typography>
                        ) : (
                            bahanList.map((bahan, index) => (
                                <Box key={index} sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    p: 1, mb: 1,
                                    bgcolor: "#12372A",
                                    borderRadius: "10px"
                                }}>
                                    <Typography>{bahan.namaBahan} - {bahan.jumlahBahan}</Typography>
                                    <Box>
                                        <IconButton color="error" onClick={() => handleDeleteBahan(index)}><DeleteIcon /></IconButton>
                                    </Box>
                                </Box>
                            ))
                        )}
                        <Button variant='contained'
                            onClick={handleClickOpenBahan}
                            sx={{
                                position: "absolute", bottom: "4%", right: "3%",
                                backgroundColor: "#12372A", color: "#D8E9A8",
                                borderRadius: "15px", fontWeight: "600",
                            }}
                        >
                            Tambah Bahan
                        </Button>
                    </Box>
                </Box>
            </Grid>
            <Dialog open={openBahan} onClose={handleCloseBahan}>
                <DialogTitle
                    sx={{
                        backgroundColor: "#12372A",
                        color: "#D8E9A8",
                        textAlign: "center",
                        fontWeight: "800",
                    }}>
                    Tambah Bahan
                </DialogTitle>
                <DialogContent
                    sx={{
                        backgroundColor: "#12372A",
                        width: { xs: "300px", md: "500px" },
                    }}>
                    <DialogContentText
                        sx={{
                            color: "#1E5128",
                            mb: 1,
                            borderRadius: "10px",
                            textAlign: "center",
                            backgroundColor: "#D8E9A8",
                            fontWeight: "600",
                            padding: "1%",
                        }}>Nama Bahan</DialogContentText>
                    <TextField value={namaBahan} placeholder='Masukan Nama Bahan Masakan' onChange={(e) => setNamaBahan(e.target.value)} fullWidth
                        sx={{
                            mb: 2,
                            input: { color: "white" },
                            "& .MuiOutlinedInput-root": {
                                border: "3px solid",
                                borderColor: "#D8E9A8",
                                borderRadius: "20px",
                                "& fieldset": { borderColor: "transparent", },
                                "&:hover fieldset": { borderColor: "transparent", },
                                "&.Mui-focused fieldset": { borderColor: "transparent", },
                                "& .MuiInputLabel-root": { color: "white", },
                                "& .MuiInputBase-input": { color: "white", },
                            },
                        }} />
                    <DialogContentText
                        sx={{
                            color: "#1E5128",
                            mb: 1,
                            borderRadius: "10px",
                            textAlign: "center",
                            backgroundColor: "#D8E9A8",
                            fontWeight: "600",
                            padding: "1%",
                        }}
                    >Jumlah Bahan</DialogContentText>
                    <TextField value={jumlahBahan} placeholder='Masukan Jumlah Bahan Masakan' onChange={(e) => setJumlahBahan(e.target.value)} fullWidth
                        sx={{
                            mb: 2,
                            input: { color: "white" },
                            "& .MuiOutlinedInput-root": {
                                border: "3px solid",
                                borderColor: "#D8E9A8",
                                borderRadius: "20px",
                                "& fieldset": { borderColor: "transparent", },
                                "&:hover fieldset": { borderColor: "transparent", },
                                "&.Mui-focused fieldset": { borderColor: "transparent", },
                                "& .MuiInputLabel-root": { color: "white", },
                                "& .MuiInputBase-input": { color: "white", },
                            },
                        }} />
                    <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                        <Button onClick={handleCloseBahan}
                            sx={{
                                backgroundColor: "#D8E9A8",
                                color: "#1E5128",
                                fontWeight: "900",
                                paddingX: "6%",
                                borderRadius: "10px",
                            }}>
                            Cancel
                        </Button>
                        <Button onClick={handleAddBahan}
                            sx={{
                                backgroundColor: "#D8E9A8",
                                color: "#1E5128",
                                fontWeight: "900",
                                paddingX: "6%",
                                borderRadius: "10px",
                            }}>
                            Tambah
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>

        </>
    )
}

export default BahanLangkah
