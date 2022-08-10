export default function Roster() {
    return (
        <div className="pb-6 sm:px-6 lg:px-8 h-auto text-white text-center">
            <details open>
                <summary className="text-2xl font-bold tracking-tight hover:cursor-pointer pb-4">Roster</summary>
                <div className="flex flex-row justify-around items-center">
                    <div>
                        <input type="text" placeholder="Item Level" />
                    </div>
                    <div>
                        <input type="text" className="w-12" placeholder="#" />
                    </div>
                    <div>
                        <label>
                            Rested?
                            <input type="checkbox" className="mx-4" />
                        </label>
                    </div>
                    <div>
                        <label className="border">
                            +
                            <input type="button" />
                        </label>
                    </div>
                </div>
            </details>
        </div>
    )
}