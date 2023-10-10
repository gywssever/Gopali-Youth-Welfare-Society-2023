import Card from './Card';
import './Report.css';
import data from './reportData';

export default function ReportContainer() {
    
    return (
        <>
            <div className="report_container">
                <div className="report_heading">
                    <h1>Reports </h1>
                </div>
                <div className="report_cards_container">
                    {data.map((data, index) => (
                        <Card key={index} title={data.title} summary={data.summary} button={data.button} />
                    ))}
                </div>
            </div>
        </>
    )
}