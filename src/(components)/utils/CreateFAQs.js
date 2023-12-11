import data from "../datas/FAQListData";

export default function CreateFAQs() {
    return data.map(function (item) {
        const { question, answer, id } = item;
        return <li key={id}>
            <h2>{question}</h2>
            <p>{answer}</p>
        </li>
    })
}