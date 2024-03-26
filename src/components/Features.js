import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <div className="FeaturesBackground">
            <div className="features-container">
                <div className="feature-block">
                    <p className="feature-title">
                        <strong>مجموعة واسعة من العقارات</strong>
                    </p>
                    <p className="feature-description">
                        اكتشف كتالوجاً واسعاً من العقارات للبيع والإيجار في منطقتك.
                    </p>
                </div>
                <div className="feature-block">
                    <p className="feature-title">
                        <strong>نشر سهل</strong>
                    </p>
                    <p className="feature-description">
                        انشر إعلانك في بضع نقرات ووصل إلى ملايين المشترين أو المستأجرين المحتملين.
                    </p>
                </div>
                <div className="feature-block">
                    <p className="feature-title">
                        <strong>بحث مخصص</strong>
                    </p>
                    <p className="feature-description">
                        استخدم مرشحاتنا المتقدمة للعثور على ما تبحث عنه بالضبط، سواء كان استوديو في وسط المدينة أو منزل ريفي.
                    </p>
                </div>
                <div className="feature-block">
                    <p className="feature-title">
                        <strong>تواصل مباشر</strong>
                    </p>
                    <p className="feature-description">
                        اتصل بالمالكين أو الوكالات مباشرةً من التطبيق لطرح أسئلتك أو التخطيط لزيارة.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Features;
