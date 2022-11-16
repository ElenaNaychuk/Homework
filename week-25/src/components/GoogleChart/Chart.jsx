import { Chart } from "react-google-charts"

const data = [
    ["Task", "Hours per Day"],
    ["Учёба", 8],
    ["Приготовление еды", 2.2],
    ["Общение с близкими", 2],
    ["Спорт", 1.5],
    ["Отдых", 2],
];

const options = {
    title: "Mоя активность днём",
};

export default function PieChart() {
    return (
        <>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </>
    );
}