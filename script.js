const toast = document.querySelector("#toast");

const showToast = (message) => {
  if (!toast) return;
  toast.textContent = message;
  toast.hidden = false;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.hidden = true;
  }, 2600);
};

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;

    if (action === "show-suggestion") {
      const target = document.querySelector(`#${button.dataset.target}`);
      if (!target) return;
      target.hidden = !target.hidden;
      button.textContent = target.hidden ? "生成修改建议" : "收起修改建议";
      showToast(target.hidden ? "已收起修改建议。" : "已生成修改建议，可复制进飞书文档。");
      return;
    }

    if (action === "create-task") {
      const target = document.querySelector("#task-result");
      if (!target) return;
      target.hidden = false;
      button.textContent = "已创建任务";
      button.disabled = true;
      showToast("已创建 3 条本地待办，用于演示任务生成效果。");
      return;
    }

    if (action === "accept-advice") {
      button.textContent = "已接受";
      showToast("已接受今日建议：优先补齐 TNS 决策材料。");
      return;
    }

    if (action === "remind-later") {
      showToast("已设置稍后提醒：今天 18:00 回来看 TNS 文档进展。");
      return;
    }

  });
});
