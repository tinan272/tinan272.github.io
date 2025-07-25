import Stack from "@mui/material/Stack";

export default function SectionTitle({ title }) {
    return (
        <Stack
            id="projects"
            display="flex"
            direction={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "flex-start", sm: "center" }}
            gap={{ xs: 2, lg: 10 }}
            marginBottom={2}
            fontSize={{ xs: 20, lg: 25 }}
            width="100%"
        >
            <p className="italic whitespace-nowrap">{title}</p>

            <div
                style={{
                    flexGrow: 1,
                    height: 1.5,
                    backgroundColor: "black",
                    width: "100%",
                }}
                className="sm:w-auto"
            />
        </Stack>
    );
}
