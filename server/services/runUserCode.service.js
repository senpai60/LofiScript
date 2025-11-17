import { NodeVM,VMScript } from "vm2";

export const runUserCode = (code,timeout=3000) => {
    try {
        const vm = new NodeVM({
            console: "redirect",
            timeout,
            sandbox:{},
            eval:false,
            wasm:false,
            allowAsync:false,
        })
        let output = ""
        vm.on("console.log",(msg)=>{
            output+=msg + "\n"
        })
        const script = new VMScript(code)
        vm.run(script)

        return output || "no output"
    } catch (err) {
        console.error(err)
    }
}