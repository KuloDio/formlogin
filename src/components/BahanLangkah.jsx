import React, { useState } from "react";
import {
    Box,
    Grid,
    Typography,
    Button,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFormContext } from "../context/FormContext";

const BahanLangkah = () => {
    const { formResep, setFormResep } = useFormContext();

    const [openLangkah, setOpenLangkah] = useState(false);
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
            setFormResep({
                ...formResep,
                langkah: [...formResep.langkah, { nomer, deskripsi }],
            });
            handleCloseLangkah();
        }
    };
    const handleDeleteStep = (index) => {
        setFormResep({
            ...formResep,
            langkah: formResep.langkah.filter((_, i) => i !== index),
        });
    };

    const [openBahan, setOpenBahan] = useState(false);
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
            setFormResep({
                ...formResep,
                bahan: [...formResep.bahan, { namaBahan, jumlahBahan }],
            });
            handleCloseBahan();
        }
    };
    const handleDeleteBahan = (index) => {
        setFormResep({
            ...formResep,
            bahan: formResep.bahan.filter((_, i) => i !== index),
        });
    };

    return (
        <>
            <Grid
                container
                direction={{ xs: "column", md: "row" }}
                sx={{ justifyContent: "space-around", marginTop: { md: "15%" }, gap: 2 }}
            >
                {/* LANGKAH */}
                <Box sx={{ width: { xs: "100%", md: "49%" }, padding: "1%" }}>
                    <Typography
                        sx={{
                            textAlign: "center",
                            border: "5px solid",
                            borderRadius: "25px",
                            borderColor: "#D8E9A8",
                            fontWeight: "800",
                            padding: "1%",
                        }}
                    >
                        LANGKAH MEMASAK
                    </Typography>

                    <Box
                        sx={{
                            width: "100%",
                            minHeight: "35vh",
                            borderRadius: "15px",
                            backgroundColor: "#D8E9A8",
                            boxShadow: "0 10px 10px 0 #00000050",
                            padding: "1%",
                            marginTop: "4%",
                            position: "relative",
                        }}
                    >
                        {formResep.langkah.length === 0 ? (
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    mt: 2,
                                    fontWeight: 600,
                                    color: "white",
                                    backgroundColor: "#12372A",
                                    paddingY: "1%",
                                    borderRadius: "10px",
                                }}
                            >
                                Belum ada langkah memasak
                            </Typography>
                        ) : (
                            formResep.langkah.map((step, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        p: 1,
                                        mb: 1,
                                        bgcolor: "#12372A",
                                        borderRadius: "10px",
                                        color: "white",
                                    }}
                                >
                                    <Typography>
                                        {step.nomer}. {step.deskripsi}
                                    </Typography>
                                    <IconButton color="error" onClick={() => handleDeleteStep(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            ))
                        )}
                        <Button
                            variant="contained"
                            onClick={handleClickOpenLangkah}
                            sx={{
                                position: "absolute",
                                bottom: "4%",
                                right: "3%",
                                backgroundColor: "#12372A",
                                color: "#D8E9A8",
                                borderRadius: "15px",
                                fontWeight: "600",
                            }}
                        >
                            Tambah Langkah
                        </Button>
                    </Box>
                    <Dialog open={openLangkah} onClose={handleCloseLangkah}>
                        <DialogTitle
                            sx={{
                                backgroundColor: "#12372A",
                                color: "#D8E9A8",
                                textAlign: "center",
                                fontWeight: "800",
                            }}
                        >Tambah Langkah</DialogTitle>
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
                                }}>Nomer Urut Memasak</DialogContentText>
                            <TextField
                                label="Nomer"
                                type="number"
                                fullWidth
                                margin="dense"
                                value={nomer}
                                sx={{
                                    mb: 2,
                                    label: { color: "white" },
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
                                onChange={(e) => setNomer(e.target.value)}
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
                                }}>Deskripsi Langkah Memasak</DialogContentText>
                            <TextField
                                label="Deskripsi"
                                fullWidth
                                multiline
                                margin="dense"
                                value={deskripsi}
                                sx={{
                                    mb: 2,
                                    label: { color: "white" },
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
                                onChange={(e) => setDeskripsi(e.target.value)}
                            />
                        </DialogContent>
                        <DialogActions
                            sx={{
                                backgroundColor: "#12372A",
                            }}
                        >
                            <Button onClick={handleCloseLangkah}
                                sx={{
                                    backgroundColor: "#D8E9A8",
                                    color: "#1E5128",
                                    fontWeight: "900",
                                    paddingX: "6%",
                                    borderRadius: "10px",
                                }}
                            >Batal</Button>
                            <Button onClick={handleAddStep} variant="contained"
                                sx={{
                                    backgroundColor: "#D8E9A8",
                                    color: "#1E5128",
                                    fontWeight: "900",
                                    paddingX: "6%",
                                    borderRadius: "10px",
                                }}>Tambah</Button>
                        </DialogActions>
                    </Dialog>
                </Box>


                {/* BAHAN */}
                <Box sx={{ width: { xs: "100%", md: "49%" }, padding: "1%" }}>
                    <Typography
                        sx={{
                            textAlign: "center",
                            border: "5px solid",
                            borderRadius: "25px",
                            borderColor: "#D8E9A8",
                            fontWeight: "800",
                            padding: "1%",
                        }}
                    >
                        BAHAN MASAKAN
                    </Typography>
                    <Box
                        sx={{
                            width: "100%",
                            minHeight: "35vh",
                            borderRadius: "15px",
                            backgroundColor: "#D8E9A8",
                            boxShadow: "0 10px 10px 0 #00000050",
                            padding: "1%",
                            marginTop: "4%",
                            position: "relative",
                        }}
                    >
                        {formResep.bahan.length === 0 ? (
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    mt: 2,
                                    fontWeight: 600,
                                    color: "white",
                                    backgroundColor: "#12372A",
                                    paddingY: "1%",
                                    borderRadius: "10px",
                                }}
                            >
                                Belum ada bahan masakan
                            </Typography>
                        ) : (
                            formResep.bahan.map((bahan, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        p: 1,
                                        mb: 1,
                                        bgcolor: "#12372A",
                                        borderRadius: "10px",
                                        color: "white",
                                    }}
                                >
                                    <Typography>
                                        {bahan.namaBahan} - {bahan.jumlahBahan}
                                    </Typography>
                                    <IconButton color="error" onClick={() => handleDeleteBahan(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            ))
                        )}
                        <Button
                            variant="contained"
                            onClick={handleClickOpenBahan}
                            sx={{
                                position: "absolute",
                                bottom: "4%",
                                right: "3%",
                                backgroundColor: "#12372A",
                                color: "#D8E9A8",
                                borderRadius: "15px",
                                fontWeight: "600",
                            }}
                        >
                            Tambah Bahan
                        </Button>
                        <Dialog open={openBahan} onClose={handleCloseBahan} >
                            <DialogTitle
                                sx={{
                                    backgroundColor: "#12372A",
                                    color: "#D8E9A8",
                                    textAlign: "center",
                                    fontWeight: "800",
                                }}
                            >Tambah Bahan</DialogTitle>

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
                                    }}>Nama Bahan</DialogContentText>
                                <TextField
                                    label="Nama Bahan"
                                    fullWidth
                                    margin="dense"
                                    value={namaBahan}
                                    sx={{
                                        mb: 2,
                                        label: { color: "white" },
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
                                    onChange={(e) => setNamaBahan(e.target.value)}
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
                                    }}>Jumlah Bahan</DialogContentText>
                                <TextField
                                    label="Jumlah"
                                    fullWidth
                                    margin="dense"
                                    value={jumlahBahan}
                                    onChange={(e) => setJumlahBahan(e.target.value)}
                                    sx={{
                                        mb: 2,
                                        label: { color: "white" },
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
                            </DialogContent>
                            <DialogActions
                                sx={{
                                    backgroundColor: "#12372A",
                                }}
                            >
                                <Button onClick={handleCloseBahan}
                                    sx={{
                                        backgroundColor: "#D8E9A8",
                                        color: "#1E5128",
                                        fontWeight: "900",
                                        paddingX: "6%",
                                        borderRadius: "10px",
                                    }}
                                >Batal</Button>
                                <Button onClick={handleAddBahan} variant="contained"
                                    sx={{
                                        backgroundColor: "#D8E9A8",
                                        color: "#1E5128",
                                        fontWeight: "900",
                                        paddingX: "6%",
                                        borderRadius: "10px",
                                    }}
                                >Tambah</Button>
                            </DialogActions>
                        </Dialog>
                    </Box>
                </Box>
            </Grid>
        </>
    );
};

export default BahanLangkah;
