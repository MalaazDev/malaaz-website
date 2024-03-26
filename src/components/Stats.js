import React from 'react';
import './Stats.css';

const Stats = () => {
    return (
        <div className="StatsBackground">

            <span className="description-text">بوابتكم للعقارات التي تسعى لتبسيط وتحسين تجربتكم في شراء، بيع، وتأجير العقارات. بواسطة تطبيقنا، ستجدون منصة شاملة تجمع كافة الفاعلين في سوق العقارات من مشترين وبائعين ومستأجرين. تصفحوا مجموعة متنوعة من العقارات، اطلعوا على مقارنات مباشرة بيسر، واحصلوا على كل ما تحتاجونه من معلومات تفصيلية بما في ذلك الصور والجولات الافتراضية لضمان اتخاذكم للقرار الأمثل بكل راحة وثقة.</span>

            <div className="stats-container">

                <div className="stat">
                    <span className="highlighted-text"><strong>3,500+ </strong></span>
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
