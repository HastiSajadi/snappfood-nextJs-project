{/* 






            <div>

            <div>
            {
                restaurant.map(({id,img,icon,title,rate,author})=>{

                    return(
                      <Suspense fallback={<div>
                        <h1>
                        Loading ...
                      </h1>
                      </div>}>
                         <Link href={`restaurant/${id}`}>
                        <div key={id}>
                            <img src={img} />
                            <img src={icon} />
                            <h1>{title}</h1>
                            <h3>{rate}</h3>
                            <p>{author}</p>
                        </div>
                       </Link>
                      </Suspense>
                    )
                })
            }
            </div>
           <div>
           <div>
                <ul>
                    <li>همه دسته‌بندی‌ها</li>
                    <Link href="/restaurant"><li>فست‌فود</li></Link>
                    <Link href="*"><li>ایرانی</li></Link>
                    <Link href="*"><li>کباب</li></Link>
                    <Link href="*"><li>سالاد</li></Link>
                    <Link href="*"><li>دریایی</li></Link>
                    <Link href="*"><li>بین الملل</li></Link>
                </ul>
            </div>

            <div>
            کلاس قیمتی 
            <div>
                <span>همه</span> <span>اقتصادی</span>  <span>متوسط</span> <span>گران</span>
            </div>
            </div>
            <div>
                <li>دارای کوپن</li>
                <li>دارای  تخفیف</li>
                <li>ارسال اکسپرس </li>
                <li>فودپرو</li>
                <li>رستوران‌های به‌صرفه</li>
                <li>خوش‌قیمت</li>
            </div>
           </div>
            </div>

           */}