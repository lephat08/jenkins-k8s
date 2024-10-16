import "@appwrite.io/pink";
import "@appwrite.io/pink-icons";

const ContractStatus = () => {
    return (
        <div class="u-flex u-main-center">
            <div class="u-margin-32">
                <div class="status is-complete">
                    <span class="status-icon"></span>
                    <span class="text">Accepted</span>
                </div>
                <h4 class="heading-level-4 u-text-center">2,340</h4>
            </div>
            <div class="u-margin-32">
                <div class="status is-pending">
                    <span class="status-icon"></span>
                    <span class="text">In Contract</span>
                </div>
                <h4 class="heading-level-4 u-text-center">1,782</h4>
            </div>
            <div class="u-margin-32">
                <div class="status is-processing">
                    <span class="status-icon"></span>
                    <span class="text">In Approval</span>
                </div>
                <h4 class="heading-level-4 u-text-center">1,596</h4>
            </div>

        </div>
    )
}
export default ContractStatus;