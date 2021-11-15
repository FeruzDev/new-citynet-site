import React from 'react';

const TvCard = () => {
    return (
        <div className="tv-card">
            <div className="tv-card-child container">
                <h4 data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="700"
                    className="font-family-medium">Наши рекомендации</h4>
                <p data-aos="fade-up"
                   data-aos-easing="ease-out-cubic"
                   data-aos-duration="700"
                   data-aos-delay="100"
                >
                    IPTV (Internet Protocol Television) – это современная технология, позволяющая эффективно передавать
                    телевизионный сигнал через сеть Интернет. IPTV – это полностью интерактивный сервис, работающий
                    через интернет, в отличие от кабельного или спутникового телевидения. Данная технология позволяет
                    получить идеальное качество изображения и звука. Именно поэтому, мы рекомендуем скорость TAS-IX не
                    менее 2 Мбит/с, а для просмотров HD-каналов – не мнее 4 Мбит/c.
                </p>
            </div>


            <div className="line120w2">
                <div className="line-insert">
            <svg width="607" height="58" viewBox="0 0 607 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M984.1 56.4238H862.997L824.803 19.1614H381.14L361.5 38.8018H249.5L224.005 15.3474H136.114" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                <path d="M136.346 11C133.94 11 131.999 12.9408 131.999 15.3473C131.999 17.7538 133.94 19.6946 136.346 19.6946C138.753 19.6946 140.693 17.7538 140.693 15.3473C140.693 12.9408 138.753 11 136.346 11Z" fill="#0086E7"/>
                <g opacity="0.4">
                    <path d="M648.66 38.2625L527.557 38.2624L489.363 1.00003L252.098 1.00001L230.499 32.8026L118.5 32.8026L93.0045 9.34821L5.11426 9.3482" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                    <path d="M5.3461 5.001C2.93957 5.001 0.998837 6.94174 0.998837 9.34827C0.998837 11.7548 2.93957 13.6956 5.3461 13.6956C7.75263 13.6956 9.69336 11.7548 9.69336 9.34827C9.69336 6.94174 7.75263 5.001 5.3461 5.001Z" fill="#0086E7"/>
                </g>
            </svg>

                </div>
            </div>
        </div>
    )
        ;
};

export default TvCard;