import List from "./List";
import Stack from "@mui/material/Stack";

export default function Skills({ aDict }) {
    return (
        <Stack
            direction="row"
            gap={{ xs: 6, sm: 10, md: 16 }}
            useFlexGap
            flexWrap="wrap"
            justifyContent={{ lg: "center" }}
        >
            {Object.entries(aDict).map(([title, arrList]) => (
                <List key={title} title={title} arrList={arrList} />
            ))}
        </Stack>
    );
}
