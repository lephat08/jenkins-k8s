import "@appwrite.io/pink";
import "@appwrite.io/pink-icons";

const ContractTable = () => {
    return (
        <div>
            <h4 class="heading-level-4 u-text-center">My Contracts</h4>
            <table class="table">
                <thead class="table-thead">
                    <tr class="table-row">
                        <th class="table-thead-col"><span class="eyebrow-heading-3">Serial No.</span></th>
                        <th class="table-thead-col">
                            <span class="eyebrow-heading-3">Name</span>
                        </th>
                        <th class="table-thead-col">
                            <span class="eyebrow-heading-3">Value</span>
                        </th>
                        <th class="table-thead-col">
                            <span class="eyebrow-heading-3">Status</span>
                        </th>
                        <th class="table-thead-col">
                            <span class="eyebrow-heading-3">Deadline</span>
                        </th>
                    </tr>
                </thead>
                <tbody class="table-tbody">
                    <tr class="table-row">
                        <td class="table-col" data-title="Name">
                            <div class="u-inline-flex u-cross-center u-gap-12">
                                <span class="text u-break-word u-line-height-1-5">1001</span>
                            </div>
                        </td>
                        <td class="table-col" data-title="Name">
                            <div><span class="text">Horizon Tech</span></div>
                        </td>
                        <td class="table-col" data-title="Value">
                            <span class="text">$48,292</span>
                        </td>
                        <td class="table-col" data-title="Status">
                            <div class="tag is-success">
                                <span class="text">Active</span>
                            </div>
                        </td>
                        <td class="table-col" data-title="Deadline">
                            <span class="text">01.01.2024</span>
                        </td>
                    </tr>
                    <tr class="table-row">
                        <td class="table-col" data-title="Name">
                            <div class="u-inline-flex u-cross-center u-gap-12">
                                <span class="text u-break-word u-line-height-1-5">1002</span>
                            </div>
                        </td>
                        <td class="table-col" data-title="Name">
                            <div><span class="text">Flowtech Labs</span></div>
                        </td>
                        <td class="table-col" data-title="Value">
                            <span class="text">$20,500</span>
                        </td>
                        <td class="table-col" data-title="Status">
                            <div class="tag is-warning">
                                <span class="text">Draft</span>
                            </div>
                        </td>
                        <td class="table-col" data-title="Deadline">
                            <span class="text">-</span>
                        </td>
                    </tr>
                    <tr class="table-row">
                        <td class="table-col" data-title="Name">
                            <div class="u-inline-flex u-cross-center u-gap-12">
                                <span class="text u-break-word u-line-height-1-5">1003</span>
                            </div>
                        </td>
                        <td class="table-col" data-title="Name">
                            <div><span class="text">ServerTech</span></div>
                        </td>
                        <td class="table-col" data-title="Value">
                            <span class="text">$15,800</span>
                        </td>
                        <td class="table-col" data-title="Status">
                            <div class="tag is-success">
                                <span class="text">Active</span>
                            </div>
                        </td>
                        <td class="table-col" data-title="Deadline">
                            <span class="text">01.03.2024</span>
                        </td>
                    </tr>
                    <tr class="table-row">
                        <td class="table-col" data-title="Name">
                            <div class="u-inline-flex u-cross-center u-gap-12">
                                <span class="text u-break-word u-line-height-1-5">1004</span>
                            </div>
                        </td>
                        <td class="table-col" data-title="Name">
                            <div><span class="text">DoveTech</span></div>
                        </td>
                        <td class="table-col" data-title="Value">
                            <span class="text">$20,500</span>
                        </td>
                        <td class="table-col" data-title="Status">
                            <div class="tag is-success">
                                <span class="text">Active</span>
                            </div>
                        </td>
                        <td class="table-col" data-title="Deadline">
                            <span class="text">01.01.2024</span>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
export default ContractTable;