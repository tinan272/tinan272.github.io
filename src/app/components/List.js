import Stack from "@mui/material/Stack";

export default function List({ title, arrList }) {
    return (
        <Stack direction="column" gap={2}>
            <p className="font-bold sm:text-md md:text-lg lg:text-xl w-auto">
                {title}
            </p>
            <div className="sm:text-md md:text-lg lg:text-xl w-auto">
                {arrList.map((skill, idx) => (
                    <p key={idx}>{skill}</p>
                ))}
            </div>
        </Stack>
    );
}
