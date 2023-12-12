import Link from "next/link";

export default function NotFound(){

    return(
        <div>
            <img src="https://snappfood.ir/bundles/bodofoodfrontend/images/errors/new-error-logo.png?v1850" />
            <img src="https://snappfood.ir/bundles/bodofoodfrontend/images/errors/404_1.jpg?v1850" />
            <h1>متاسفانه، صفحه‌ موردنظر شما یافت نشد</h1>
            <Link href='/' ><button>
            بازگشت به صفحه اصلی
                </button></Link>
        </div>
    )
}