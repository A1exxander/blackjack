import { Field, Label, Input, Fieldset, Button } from "@headlessui/react"
import { useState } from "react"
import { Toaster, toast } from "sonner"
import { Body } from "./Body"
import useUsernameStore from "../store/useSettingsStore"

export default function SettingsPage(): React.ReactElement {
    const username = useUsernameStore((state) => state.username);
    const setUsername = useUsernameStore((state) => state.setUsername);
    const [localUsername, setLocalUsername] = useState(username);

    const handleSave = () => {
        setUsername(localUsername);
        toast.success("Username saved", {
            description: `You're now known as "${localUsername}"`,
        });
    };

    return (
        <Body>
            <Toaster
                position="bottom-right"
                toastOptions={{
                    classNames: {
                        toast: "border border-offwhite/20 text-offwhite rounded",
                        title: "text-offwhite text-sm font-semibold",
                        description: "text-offwhite text-xs",
                        icon: "text-gold",
                    },
                }}
            />
            <main className="flex flex-col items-center">
                <h2 className="text-lg lg:text-xl text-offwhite pt-4 font-semibold tracking-widest">SETTINGS</h2>
                <Fieldset className="w-full max-w-md flex flex-col gap-6 pt-10 px-6">
                    <Field>
                        <Label className="block text-offwhite text-sm tracking-wide mb-2">Username</Label>
                        <Input
                            type="text"
                            placeholder="Player"
                            value={localUsername}
                            className="w-full bg-transparent border border-offwhite/30 text-offwhite placeholder-offwhite/30 rounded px-4 py-2 text-sm focus:outline-none focus:border-offwhite/80 transition-colors"
                            onChange={(e) => setLocalUsername(e.target.value)}
                        />
                    </Field>
                    <Button
                        onClick={handleSave}
                        className="cursor-pointer text-gold p-1 px-2 border-2 border-gold bg-transparent font-semibold text-md rounded transition-colors duration-300 hover:bg-darkgrey hover:text-gold"
                    >
                        <span>Save Changes</span>
                    </Button>
                </Fieldset>
            </main>
        </Body>
    )
}