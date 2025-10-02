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

    // === STEPS (Langkah) ===
    const [openLangkah, setOpenLangkah] = useState(false);
    const [nomer, setNomer] = useState("");
    const [deskripsi, setDeskripsi] = useState("");

    const handleClickOpenLangkah = () => setOpenLangkah(true);
    const handleCloseLangkah = () => {
        setOpenLangkah(false);
        setNomer("");
        setDeskripsi("");
        setTimeout(() => {
            document.activeElement.blur();
        }, 0);
    };

    const handleAddStep = () => {
        if (nomer && deskripsi) {
            setFormResep({
                ...formResep,
                steps: [
                    ...formResep.steps,
                    {
                        id: Date.now().toString(), // dummy id sementara
                        number: parseInt(nomer, 10),
                        detail: deskripsi,
                    },
                ],
            });
            handleCloseLangkah();
        }
    };

    const handleDeleteStep = (index) => {
        setFormResep({
            ...formResep,
            steps: formResep.steps.filter((_, i) => i !== index),
        });
    };

    // === INGREDIENTS (Bahan) ===
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
                ingredients: [
                    ...formResep.ingredients,
                    {
                        id: Date.now().toString(), // dummy id sementara
                        name: namaBahan,
                        amount: jumlahBahan,
                    },
                ],
            });
            handleCloseBahan();
        }
    };

    const handleDeleteBahan = (index) => {
        setFormResep({
            ...formResep,
            ingredients: formResep.ingredients.filter((_, i) => i !== index),
        });
    };

    return (
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
                    {formResep.steps.length === 0 ? (
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
                        formResep.steps.map((step, index) => (
                            <Box
                                key={step.id || index}
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
                                    {step.number}. {step.detail}
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

                {/* Dialog Tambah Langkah */}
                <Dialog open={openLangkah} onClose={handleCloseLangkah}>
                    <DialogTitle
                        sx={{
                            backgroundColor: "#12372A",
                            color: "#D8E9A8",
                            textAlign: "center",
                            fontWeight: "800",
                        }}
                    >
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
                        >
                            Nomor Urut Memasak
                        </DialogContentText>
                        <TextField
                            label="Nomor"
                            type="number"
                            fullWidth
                            margin="dense"
                            value={nomer || ""}  // ✅ selalu controlled
                            onChange={(e) => setNomer(e.target.value)}
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
                        >
                            Deskripsi Langkah Memasak
                        </DialogContentText>
                        <TextField
                            label="Deskripsi"
                            fullWidth
                            multiline
                            margin="dense"
                            value={deskripsi || ""}  // ✅ selalu controlled
                            onChange={(e) => setDeskripsi(e.target.value)}
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
                    <DialogActions sx={{ backgroundColor: "#12372A" }}>
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
                            }}
                        >
                            Tambah
                        </Button>
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
                    {formResep.ingredients.length === 0 ? (
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
                        formResep.ingredients.map((bahan, index) => (
                            <Box
                                key={bahan.id || index}
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
                                    {bahan.name} - {bahan.amount}
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

                    {/* Dialog Tambah Bahan */}
                    <Dialog open={openBahan} onClose={handleCloseBahan}>
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
                                }}
                            >Nama Bahan</DialogContentText>
                            <TextField
                                label="Nama Bahan"
                                fullWidth
                                margin="dense"
                                value={namaBahan || ""}
                                onChange={(e) => setNamaBahan(e.target.value)}
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
                            <TextField
                                label="Jumlah"
                                fullWidth
                                margin="dense"
                                value={jumlahBahan || ""}
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
                            >
                                Tambah
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            </Box>

        </Grid>
    );
};

export default BahanLangkah;
