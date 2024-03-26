import React from 'react';
import './Stats.css';

const Stats = () => {
    return (
        <div className="StatsBackground">
            <div className="stats-container">

                <div className="stat">
                    <span className="highlighted-text"><strong>2,500+ </strong></span>
                    <span className="downloads">تحميل</span>
                </div>

                <div className="stat">
                    <span className="highlighted-text"><strong>100+ </strong></span>
                    <span className="partners">شركاء</span>
                </div>

                <div className="stat">
                    <span className="highlighted-text"><strong>10,000+</strong></span>
                    <span className="properties">عقارات</span>
                </div>

            </div>
        </div>
    );
};

export default Stats;
