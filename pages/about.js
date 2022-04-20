import { useRouter } from "next/router";

export default function About() {
    const router = useRouter();
    const { title } = router.query; // 변수명과 파라미터 이름이 같아야합니다.
    return (
        <p>Hello, my name is {title}.</p>
    )

}